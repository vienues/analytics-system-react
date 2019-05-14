import { Field, Float, ID, Int, ObjectType } from 'type-graphql'
import Company from '../company/Company.schema'
import { DateTime, DateTimeScalar, Time, TimeScalar } from '../DateScalars'

@ObjectType()
export default class Quote {
  @Field(() => ID)
  public id!: string

  @Field()
  public symbol!: string

  @Field(type => Company)
  public company!: Company

  @Field()
  public companyName!: string

  @Field()
  public primaryExchange!: string

  @Field()
  public sector!: string

  @Field()
  public calculationPrice!: string

  @Field(() => Float)
  public open!: number

  @Field(type => DateTimeScalar)
  public openTime!: DateTime

  @Field(() => Float)
  public close!: number

  @Field(type => DateTimeScalar)
  public closeTime!: DateTime

  @Field(() => Float)
  public high!: number

  @Field(() => Float)
  public low!: number

  @Field(() => Float)
  public latestPrice!: number

  @Field()
  public latestSource!: string

  @Field(type => TimeScalar)
  public latestTime!: Time

  @Field(type => DateTimeScalar)
  public latestUpdate!: DateTime

  @Field(() => Int)
  public latestVolume!: number

  @Field(() => Float)
  public iexRealtimePrice!: number

  @Field(() => Int)
  public iexRealtimeSize!: number

  @Field(type => DateTimeScalar)
  public iexLastUpdated!: DateTime

  @Field(() => Float)
  public delayedPrice!: number

  @Field(type => DateTimeScalar)
  public delayedPriceTime!: DateTime

  @Field(() => Float)
  public previousClose!: number

  @Field(() => Float)
  public change!: number

  @Field(() => Float)
  public changePercent!: number

  @Field(() => Float)
  public iexMarketPercent!: number

  @Field(() => Int)
  public iexVolume!: number

  @Field(() => Int)
  public avgTotalVolume!: number

  @Field(() => Float)
  public iexBidPrice!: number

  @Field(() => Int)
  public iexBidSize!: number

  @Field(() => Float)
  public iexAskPrice!: number

  @Field(() => Int)
  public iexAskSize!: number

  @Field(() => Float)
  public marketCap!: number

  @Field(() => Float, { nullable: true })
  public peRatio?: number

  @Field(() => Float)
  public week52High!: number

  @Field(() => Float)
  public week52Low!: number

  @Field(() => Float)
  public ytdChange!: number
}
