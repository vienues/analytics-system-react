import { Arg, Args, Ctx, FieldResolver, Query, Resolver, Root, Subscription } from 'type-graphql'
import { TickService } from '.'
import { IAdaptiveCtx } from '../../types'
import { DateTime, DateTimeScalar, formatDate } from '../DateScalars'
import { default as IntradaySchema } from './Intraday.schema'
import IntradayQuoteArgs from './IntradayQueryArgs'

export interface IAutoResolvedFields {
  datetime: DateTime
}

export type AutoFields = IAutoResolvedFields

@Resolver(of => IntradaySchema)
export default class Intraday {
  constructor(private readonly tickService: TickService) {}

  @Query(returns => [IntradaySchema])
  public async intradayPrices(
    @Args() { symbol, lastN }: IntradayQuoteArgs,
    @Ctx() ctx: IAdaptiveCtx,
  ): Promise<IntradaySchema[]> {
    return await this.tickService.getIntradayPricing(symbol, lastN)
  }

  @FieldResolver(() => DateTimeScalar)
  public async datetime(@Root() { date, minute }: IntradaySchema) {
    return `${formatDate(date) || ''}${minute ? `T${minute}` : ''}`
  }
}
