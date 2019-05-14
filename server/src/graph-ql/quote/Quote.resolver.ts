import { Args, ArgsType, Ctx, Field, FieldResolver, Query, Resolver, Root, Subscription } from 'type-graphql'
import { IAdaptiveCtx, IIexBatchQuote, IIexQuoteQuery } from '../../types'
import { CompanySchema, CompanyService } from '../company'
import { IdInputArgs } from '../GenericArgTypes'
import { QuoteService, SubscriptionQuoteArgs } from './'
import { default as QuoteSchema } from './Quote.schema'

export interface IAutoResolvedFields {
  id: string
  company: CompanySchema
}

export interface IAutoCastedFields {
  openTime: Date
  closeTime: Date
  latestTime: Date
  latestUpdate: Date
  iexLastUpdated: Date
  delayedPriceTime: Date
}

export type AutoFields = IAutoResolvedFields & IAutoCastedFields

@Resolver(of => QuoteSchema)
export default class Quote {
  constructor(private readonly quoteService: QuoteService, private readonly companyService: CompanyService) {}
  @Query(() => QuoteSchema)
  public async quote(@Args() { id }: IdInputArgs, @Ctx() ctx: IAdaptiveCtx): Promise<QuoteSchema> {
    return this.quoteService.getQuote(id, ctx)
  }

  @Query(() => [QuoteSchema])
  public async markets(@Ctx() ctx: IAdaptiveCtx): Promise<QuoteSchema[]> {
    const response = await ctx.iex.fetch<IIexBatchQuote>(`stock/market/batch?symbols=spy,dia,iwm&types=quote`)
    return Object.values(response).map(quote => quote.quote as IIexQuoteQuery & AutoFields)
  }

  @FieldResolver()
  public async id(@Root() quoteData: QuoteSchema) {
    return quoteData.symbol
  }

  @FieldResolver()
  public async company(@Root() quoteData: QuoteSchema, @Ctx() ctx: IAdaptiveCtx): Promise<CompanySchema> {
    return this.companyService.getCompany(quoteData.symbol, ctx)
  }

  @Subscription(returns => QuoteSchema, {
    topics: ({ args }) => args.symbols.map((arg: string) => `MARKET_UPDATE.${arg}`),
  })
  public getQuotes(@Root() quote: QuoteSchema, @Args() _: SubscriptionQuoteArgs): QuoteSchema {
    return quote
  }
}
