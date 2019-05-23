import { Field, Float, ID, Int, ObjectType } from 'type-graphql'
import Company from '../company/Company.schema'
import { DateTime, DateTimeScalar, Time, TimeScalar } from '../DateScalars'

@ObjectType()
export default class Quote {
  @Field(() => ID)
  public id!: string

  @Field()
  public symbol!: string

  @Field(() => Company, { nullable: true })
  public company?: Company

  @Field({ nullable: true })
  public companyName?: string

  @Field({ nullable: true })
  public calculationPrice?: string

  @Field(() => Float, { nullable: true })
  public open?: number

  @Field(() => DateTimeScalar, { nullable: true })
  public openTime?: DateTime

  @Field(() => Float, { nullable: true })
  public close?: number

  @Field(() => DateTimeScalar, { nullable: true })
  public closeTime?: DateTime

  @Field(() => Float, { nullable: true })
  public high?: number

  @Field(() => Float, { nullable: true })
  public low?: number

  @Field(() => Float, { nullable: true })
  public latestPrice?: number

  @Field({ nullable: true })
  public latestSource?: string

  @Field(() => TimeScalar, { nullable: true })
  public latestTime?: Time

  @Field(() => DateTimeScalar, { nullable: true })
  public latestUpdate?: DateTime

  @Field(() => Int, { nullable: true })
  public latestVolume?: number

  @Field(() => Float, { nullable: true })
  public iexRealtimePrice?: number

  @Field(() => Int, { nullable: true })
  public iexRealtimeSize?: number

  @Field(() => DateTimeScalar, { nullable: true })
  public iexLastUpdated?: DateTime

  @Field(() => Float, { nullable: true })
  public delayedPrice?: number

  @Field(() => DateTimeScalar, { nullable: true })
  public delayedPriceTime?: DateTime

  @Field(() => Float, { nullable: true })
  public previousClose?: number

  @Field(() => Float, { nullable: true })
  public change?: number

  @Field(() => Float, { nullable: true })
  public changePercent?: number

  @Field(() => Float, { nullable: true })
  public iexMarketPercent?: number

  @Field(() => Int, { nullable: true })
  public iexVolume?: number

  @Field(() => Int, { nullable: true })
  public avgTotalVolume?: number

  @Field(() => Float, { nullable: true })
  public iexBidPrice?: number

  @Field(() => Int, { nullable: true })
  public iexBidSize?: number

  @Field(() => Float, { nullable: true })
  public iexAskPrice?: number

  @Field(() => Int, { nullable: true })
  public iexAskSize?: number

  @Field(() => Float, { nullable: true })
  public marketCap?: number

  @Field(() => Float, { nullable: true })
  public peRatio?: number

  @Field(() => Float, { nullable: true })
  public week52High?: number

  @Field(() => Float, { nullable: true })
  public week52Low?: number

  @Field(() => Float, { nullable: true })
  public ytdChange?: number
}
