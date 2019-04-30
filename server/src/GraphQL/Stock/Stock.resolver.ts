import 'reflect-metadata'
import { Arg, FieldResolver, Query, Resolver, Root, Ctx, Args } from 'type-graphql'
import { default as StockSchema } from './Stock.schema'
import getDataSource from '../../connectors'
import SearchResult from './SearchResult.schema'
import search from '../../resolvers/searchIndex'
import { IdInputArgs } from '../GenericArgTypes'

type Ctx = { iex: ReturnType<typeof getDataSource> }

@Resolver(of => StockSchema)
export default class Stock {
  @Query(returns => StockSchema)
  async stock(@Args() { id }: IdInputArgs, @Ctx() ctx: Ctx): Promise<StockSchema> {
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
  async chart(@Root() stock: StockSchema, @Ctx() ctx: Ctx) {
    return ctx.iex.fetch(`stock/${stock.id}/chart/1d`)
  }

  @FieldResolver()
  async stats(@Root() stock: StockSchema, @Ctx() ctx: Ctx) {
    return ctx.iex.fetch(`stock/${stock.id}/stats`)
  }

  @FieldResolver()
  async company(@Root() stock: StockSchema, @Ctx() ctx: Ctx) {
    return ctx.iex.fetch(`stock/${stock.id}/company`)
  }

  @FieldResolver()
  async peers(@Root() stock: StockSchema, @Ctx() ctx: Ctx) {
    return ctx.iex.fetch(`stock/${stock.id}/peers`)
  }

  @FieldResolver()
  async quote(@Root() stock: StockSchema, @Ctx() ctx: Ctx) {
    return ctx.iex.fetch(`stock/${stock.id}/quote`)
  }
}
