import { FieldResolver, Query, Resolver, Root, Ctx, Subscription, ArgsType, Field, Args } from 'type-graphql'
import { default as QuoteSchema } from './Quote.schema'
import { IdInputArgs } from '../GenericArgTypes'
import { AdaptiveCtx, IIexQuoteQuery, IIexBatchQuote } from '../../types'

export interface AutoCastedFields {
  openTime: Date
}

@ArgsType()
export class SubscriptionQuoteArgs {
  @Field(type => [String])
  symbols: string[] = []
}

@Resolver(of => QuoteSchema)
export default class Quote {
  @Query(() => QuoteSchema)
  async quote(@Args() { id }: IdInputArgs, @Ctx() ctx: AdaptiveCtx): Promise<QuoteSchema> {
    return ctx.iex.fetch<IIexQuoteQuery & AutoCastedFields>(`stock/${id}/quote`)
  }

  @Query(() => [QuoteSchema])
  async markets(@Ctx() ctx: AdaptiveCtx): Promise<QuoteSchema[]> {
    const response = await ctx.iex.fetch<IIexBatchQuote>(`stock/market/batch?symbols=spy,dia,iwm&types=quote`)
    return Object.values(response).map(quote => <IIexQuoteQuery & AutoCastedFields>quote.quote)
  }

  @FieldResolver()
  async id(@Root() quoteData: QuoteSchema) {
    return quoteData.symbol
  }

  @Subscription(returns => QuoteSchema, {
    topics: ({ args }) => args.symbols.map((arg: string) => `MARKET_UPDATE.${arg}`),
  })
  getQuotes(@Root() quote: QuoteSchema, @Args() _: SubscriptionQuoteArgs): QuoteSchema {
    return quote
  }
}
