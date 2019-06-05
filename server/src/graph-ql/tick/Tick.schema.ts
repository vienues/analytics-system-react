import { Field, Float, ObjectType } from 'type-graphql'
import { Date, DateScalar, DateTime, DateTimeScalar, Time, TimeScalar } from '../DateScalars'

@ObjectType()
export default class Tick {
  @Field(type => DateScalar)
  public date!: Date

  @Field(type => TimeScalar)
  public minute!: Time

  @Field(type => DateTimeScalar)
  public datetime!: DateTime

  @Field()
  public label!: string

  @Field(type => Float)
  public high!: number

  @Field(type => Float)
  public low!: number

  @Field(type => Float)
  public average!: number

  @Field(type => Float)
  public volume!: number

  @Field(type => Float)
  public notional!: number

  @Field(type => Float)
  public numberOfTrades!: number

  @Field(type => Float)
  public changeOverTime!: number

  @Field(type => Float)
  public marketHigh!: number

  @Field(type => Float)
  public marketLow!: number

  @Field(type => Float)
  public marketAverage!: number

  @Field(type => Float)
  public marketVolume!: number

  @Field(type => Float)
  public marketNotional!: number

  @Field(type => Float)
  public marketNumberOfTrades!: number

  @Field(type => Float)
  public marketChangeOverTime!: number
}
