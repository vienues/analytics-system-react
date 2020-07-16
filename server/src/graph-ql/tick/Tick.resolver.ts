import { IntradayIEXOnly } from 'iexcloud_api_wrapper'
import { Arg, Args, Ctx, FieldResolver, Query, Resolver, Root, Subscription } from 'type-graphql'
import { TickService } from '.'
import { pubsub } from '../../pubsub'
import { DateTime, DateTimeScalar, formatDate } from '../DateScalars'
import { QuoteService } from '../quote'
import { default as IntradaySchema } from './Intraday.schema'
import IntradayQuoteArgs from './IntradayQueryArgs'
import { default as TickSchema } from './Tick.schema'

export interface IAutoResolvedFields {
  datetime: DateTime
}

export type AutoFields = IAutoResolvedFields

@Resolver(of => TickSchema)
export default class Tick {
  constructor(private readonly quoteService: QuoteService, private readonly tickService: TickService) {
    // HACK HACK HACK
    pubsub.subscribe('SUBSCRIBE_TO_INTRADAY_UPDATES', (symbol: string) => {
      this.quoteService.startIntradayPricingLoop(symbol)
    })
    pubsub.subscribe('UNSUBSCRIBE_TO_INTRADAY_UPDATES', (symbol: string) => {
      this.quoteService.stopIntradayPricingLoop(symbol)
    })
  }

  @Query(returns => [IntradaySchema])
  public async intradayPrices(
    @Args() { symbol, lastN }: IntradayQuoteArgs
  ): Promise<IntradaySchema[]> {
    return await this.tickService.getIntradayPricing(symbol, lastN)
  }

  @FieldResolver(() => DateTimeScalar)
  public async datetime(@Root() { date, minute }: TickSchema) {
    return `${formatDate(date) || ''}${minute ? `T${minute}` : ''}`
  }

  @Subscription(returns => [IntradaySchema], {
    topics: ({ args }) => `INTRADAY_PRICING.${args.symbol}`,
  })
  public getIntradayPrices(@Root() intradayPricing: IntradaySchema[], @Arg('symbol') _: string): IntradaySchema[] {
    return intradayPricing
  }
}
