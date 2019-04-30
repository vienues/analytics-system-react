import 'reflect-metadata'
import { FieldResolver, InputType, Query, Resolver, Root, Ctx, Subscription, ArgsType, Field, Args } from 'type-graphql'
import { default as QuoteSchema } from './Quote.schema'
import { pubsub } from '../../pubsub'
import { IdInputArgs } from '../GenericArgTypes'
import { AdaptiveCtx, IIexQuoteQuery, IIexBatchQuote } from '../../types'
import pricing from '../../pricing'

pricing(pubsub)

@ArgsType()
export class SubscriptionQuoteArgs {
  @Field(type => [String])
  symbols: string[] = []
}

@Resolver(of => QuoteSchema)
export default class Quote {
  @Query(() => QuoteSchema)
  async quote(@Args() { id }: IdInputArgs, @Ctx() ctx: AdaptiveCtx): Promise<QuoteSchema> {
    // temp casting
    return (ctx.iex.fetch<IIexQuoteQuery>(`stock/${id}/quote`) as unknown) as Promise<QuoteSchema>
  }

  @Query(() => [QuoteSchema])
  async markets(@Ctx() ctx: AdaptiveCtx): Promise<QuoteSchema[]> {
    const val = await ctx.iex.fetch<IIexBatchQuote>(`stock/market/batch?symbols=spy,dia,iwm&types=quote`)
    // temp casting
    return Object.values(val).map(x => (x.quote as unknown) as QuoteSchema)
  }

  @FieldResolver()
  async id(@Root() quoteData: QuoteSchema) {
    return quoteData.symbol
  }

  @Subscription(returns => QuoteSchema, {
    topics: ({ args }) => {
      console.info('hit resolver with:', args.symbols)
      pubsub.publish('SUBSCRIBE_TO_MARKET_UPDATES', args.symbols)
      return args.symbols.map((arg: string) => `MARKET_UPDATE.${arg}`)
    },
  })
  getQuotes(@Root() quote: QuoteSchema, @Args() _: SubscriptionQuoteArgs): QuoteSchema {
    return quote
  }
}
