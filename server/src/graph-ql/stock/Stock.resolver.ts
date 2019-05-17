import { Arg, Args, Ctx, FieldResolver, Query, Resolver, Root } from 'type-graphql'
import search from '../../services/searchIndex'
import { IAdaptiveCtx, IIexPreviousQuery } from '../../types'
import { CompanySchema, CompanyService } from '../company'
import { IdInputArgs } from '../GenericArgTypes'
import { NewsSchema, NewsService } from '../news'
import { QuoteSchema, QuoteService } from '../quote'
import { StatsSchema, StatsService } from '../stats'
import { TickSchema, TickService } from '../tick'
import Previous from './Previous.schema'
import SearchResult from './SearchResult.schema'
import { default as StockSchema } from './Stock.schema'
import { PreviousDay } from 'iexcloud_api_wrapper'

interface IStockFields {
  id: string
  symbol: string
}

interface IAutoResolvedFields {
  chart: TickSchema[]
  stats: StatsSchema
  peers: string[]
  quote: QuoteSchema
  price: number
  previous: Previous
  company: CompanySchema
  news: (last: number) => NewsSchema[]
}

type AutoFields = IAutoResolvedFields & IStockFields

@Resolver(of => StockSchema)
export default class Stock {
  constructor(
    private readonly companyService: CompanyService,
    private readonly tickService: TickService,
    private readonly newsService: NewsService,
    private readonly statsService: StatsService,
    private readonly quoteService: QuoteService,
  ) {}

  @Query(returns => StockSchema)
  public async stock(@Args() { id }: IdInputArgs, @Ctx() ctx: IAdaptiveCtx): Promise<StockSchema> {
    return {
      id: id.toUpperCase(),
      symbol: id,
    } as AutoFields
  }

  @Query(retuns => [SearchResult])
  public async search(@Arg('text') text: string) {
    return search(text)
  }

  @FieldResolver()
  public async chart(@Root() stock: StockSchema, @Ctx() ctx: IAdaptiveCtx): Promise<TickSchema[]> {
    return this.tickService.getChart(stock.id, ctx)
  }

  @FieldResolver()
  public async stats(@Root() stock: StockSchema, @Ctx() ctx: IAdaptiveCtx): Promise<StatsSchema> {
    return this.statsService.getStats(stock.id, ctx)
  }

  @FieldResolver()
  public async company(@Root() stock: StockSchema, @Ctx() ctx: IAdaptiveCtx): Promise<CompanySchema> {
    return this.companyService.getCompany(stock.id, ctx)
  }

  @FieldResolver()
  public async peers(@Root() stock: StockSchema, @Ctx() ctx: IAdaptiveCtx): Promise<string[]> {
    return ctx.iex.peers(stock.id)
  }

  @FieldResolver()
  public async quote(@Root() stock: StockSchema, @Ctx() ctx: IAdaptiveCtx): Promise<QuoteSchema> {
    return this.quoteService.getQuote(stock.id, ctx)
  }

  @FieldResolver()
  public async price(@Root() stock: StockSchema, @Ctx() ctx: IAdaptiveCtx): Promise<number> {
    return ctx.iex.price(stock.id)
  }

  @FieldResolver()
  public async previous(@Root() stock: StockSchema, @Ctx() ctx: IAdaptiveCtx): Promise<Previous> {
    // @ts-ignore - vwap does not exist in typings
    return ctx.iex.previousDay(stock.id)
  }

  @FieldResolver()
  public async news(
    @Root() stock: StockSchema,
    @Ctx() ctx: IAdaptiveCtx,
    @Arg('last') last: number,
  ): Promise<NewsSchema[]> {
    return this.newsService.getLatestNews(stock.id, last, ctx)
  }
}
