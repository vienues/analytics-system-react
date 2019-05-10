import { Field, ID, ObjectType, Float, Int } from 'type-graphql'
import Company from '../company/Company.schema'

@ObjectType()
export default class Quote {
  @Field(() => ID)
  id?: string | undefined

  @Field()
  symbol?: string

  @Field(type => Company)
  company?: Company

  @Field()
  companyName?: string

  @Field()
  primaryExchange?: string

  @Field()
  sector?: string

  @Field()
  calculationPrice?: string

  @Field(() => Float)
  open?: number

  @Field()
  openTime?: Date

  @Field(() => Float)
  close?: number

  @Field()
  closeTime?: Date

  @Field(() => Float)
  high?: number

  @Field(() => Float)
  low?: number

  @Field(() => Float)
  latestPrice?: number

  @Field()
  latestSource?: string

  @Field()
  latestTime?: Date

  @Field()
  latestUpdate?: Date

  @Field(() => Int)
  latestVolume?: number

  @Field(() => Float)
  iexRealtimePrice?: number

  @Field(() => Int)
  iexRealtimeSize?: number

  @Field()
  iexLastUpdated?: Date

  @Field(() => Float)
  delayedPrice?: number

  @Field()
  delayedPriceTime?: Date

  @Field(() => Float)
  previousClose?: number

  @Field(() => Float)
  change?: number

  @Field(() => Float)
  changePercent?: number

  @Field(() => Float)
  iexMarketPercent?: number

  @Field(() => Int)
  iexVolume?: number

  @Field(() => Int)
  avgTotalVolume?: number

  @Field(() => Float)
  iexBidPrice?: number

  @Field(() => Int)
  iexBidSize?: number

  @Field(() => Float)
  iexAskPrice?: number

  @Field(() => Int)
  iexAskSize?: number

  @Field(() => Float)
  marketCap?: number

  @Field(() => Float)
  peRatio?: number

  @Field(() => Float)
  week52High?: number

  @Field(() => Float)
  week52Low?: number

  @Field(() => Float)
  ytdChange?: number
}
