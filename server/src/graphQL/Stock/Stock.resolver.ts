import { Arg, FieldResolver, Query, Resolver, Root, Ctx, Args } from 'type-graphql'
import { default as StockSchema } from './Stock.schema'
import SearchResult from './SearchResult.schema'
import search from '../../services/searchIndex'
import { IdInputArgs } from '../GenericArgTypes'
import { IIexQuoteQuery, IIexCompanyQuery, IIexStatsQuery, IIexChart1d, AdaptiveCtx } from '../../types'
import Quote from '../Quote/Quote.schema'
import Company from '../Company/Company.schema'
import { AutoResolvedFields as AutoResolvedCompanyFields } from '../Company/Company.resolver'
import Tick from '../Tick/Tick.schema'
import { AutoCastedFields as AutoCastedQuoteFields } from '../Quote/Quote.resolver'

@Resolver(of => StockSchema)
export default class Stock {
  @Query(returns => StockSchema)
  async stock(@Args() { id }: IdInputArgs, @Ctx() ctx: AdaptiveCtx): Promise<StockSchema> {
    return {
      id: id.toUpperCase(),
      symbol: id,
    }
  }

  @Query(retuns => [SearchResult])
  async search(@Arg('text') text: string) {
    return search(text)
  }

  @FieldResolver()
  async chart(@Root() stock: StockSchema, @Ctx() ctx: AdaptiveCtx): Promise<Tick[]> {
    return ctx.iex.fetch<IIexChart1d[]>(`stock/${stock.id}/chart/1d`)
  }

  @FieldResolver()
  async stats(@Root() stock: StockSchema, @Ctx() ctx: AdaptiveCtx) {
    return ctx.iex.fetch<IIexStatsQuery>(`stock/${stock.id}/stats`)
  }

  @FieldResolver()
  async company(@Root() stock: StockSchema, @Ctx() ctx: AdaptiveCtx): Promise<Company> {
    return ctx.iex.fetch<IIexCompanyQuery & AutoResolvedCompanyFields>(`stock/${stock.id}/company`)
  }

  @FieldResolver()
  async peers(@Root() stock: StockSchema, @Ctx() ctx: AdaptiveCtx): Promise<string[]> {
    return ctx.iex.fetch<string[]>(`stock/${stock.id}/peers`)
  }

  @FieldResolver()
  async quote(@Root() stock: StockSchema, @Ctx() ctx: AdaptiveCtx): Promise<Quote> {
    return ctx.iex.fetch<IIexQuoteQuery & AutoCastedQuoteFields>(`stock/${stock.id}/quote`)
  }
}
