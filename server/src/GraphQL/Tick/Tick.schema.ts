import { Field, ObjectType, Float } from 'type-graphql'
import { DateScalar, TimeScalar, DateTime, DateTimeScalar, Date, Time } from '../DateScalars'

@ObjectType()
export default class Tick {
  @Field(type => DateScalar)
  date?: Date

  @Field(type => TimeScalar)
  minute?: Time

  @Field(type => DateTimeScalar)
  datetime?: DateTime

  @Field()
  label?: string

  @Field(type => Float)
  high?: number

  @Field(type => Float)
  low?: number

  @Field(type => Float)
  average?: number

  @Field(type => Float)
  volume?: number

  @Field(type => Float)
  notional?: number

  @Field(type => Float)
  numberOfTrades?: number

  @Field(type => Float)
  changeOverTime?: number

  @Field(type => Float)
  marktHigh?: number

  @Field(type => Float)
  marketLow?: number

  @Field(type => Float)
  marketAverage?: number

  @Field(type => Float)
  marketVolume?: number

  @Field(type => Float)
  marketNotional?: number

  @Field(type => Float)
  marketNumberOfTrades?: number

  @Field(type => Float)
  marketChangeOverTime?: number
}
