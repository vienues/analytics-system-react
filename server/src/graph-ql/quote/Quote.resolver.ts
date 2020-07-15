import { Quote as QuoteAPI } from 'iexcloud_api_wrapper'
import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Query, Resolver, Root, Subscription } from 'type-graphql'
import logger from '../../services/logger'
import { IIexBatchQuote, IIexQuoteQuery } from '../../types'
import { CompanySchema, CompanyService } from '../company'
import { IdInputArgs } from '../GenericArgTypes'
import { QuoteService, SubscriptionQuoteArgs } from './'
import { default as QuoteSchema } from './Quote.schema'
import getDataSource  from '../../connectors'

const iex = getDataSource(process.env.INSIGHTS_OFFLINE)

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
  public async quote(@Args() { id }: IdInputArgs): Promise<QuoteSchema | null> {
    try {
      return this.quoteService.getQuote(id)
    } catch (e) {
      logger.error(`Error: ${e.message}`)
      return null
    }
  }

  @Query(() => [QuoteSchema])
  public async markets(): Promise<QuoteSchema[] | null> {
    try {
      const response: QuoteAPI = await iex.iexApiRequest(`/stock/market/batch?symbols=spy,dia,iwm&types=quote`)
      return Object.values(response).map(quote => quote.quote as IIexQuoteQuery & AutoFields)
    } catch (e) {
      logger.error(`Error: ${e.message}`)
      return null
    }
  }

  @FieldResolver()
  public async id(@Root() quoteData: QuoteSchema) {
    return quoteData.symbol
  }

  @FieldResolver()
  public async company(@Root() quoteData: QuoteSchema): Promise<CompanySchema> {
    return this.companyService.getCompany(quoteData.symbol)
  }

  @Subscription(returns => QuoteSchema, {
    topics: ({ args }) => args.symbols.map((arg: string) => `MARKET_UPDATE.${arg}`),
  })
  public getQuotes(@Root() quote: QuoteSchema, @Arg('symbols', type => [String]) symbols: string[]): QuoteSchema {
    return quote
  }
}
