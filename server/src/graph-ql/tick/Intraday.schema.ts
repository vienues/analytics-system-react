import { Field, Float, Int, ObjectType } from 'type-graphql'
import { Date as GraphQLDate, DateScalar, DateTime, DateTimeScalar, Time, TimeScalar } from '../DateScalars'
import Tick from './Tick.schema'

@ObjectType()
export default class Intraday implements Partial<Tick> {
  @Field(type => DateScalar, { nullable: true })
  public date!: GraphQLDate

  @Field(type => TimeScalar, { nullable: true })
  public minute!: Time

  @Field(type => DateTimeScalar, { nullable: true })
  public datetime: DateTime

  @Field(type => Float, { nullable: true })
  public high!: number

  @Field(type => Float, { nullable: true })
  public low!: number

  @Field(type => Float, { nullable: true })
  public average!: number

  @Field(type => Float, { nullable: true })
  public open!: number

  @Field(type => Float, { nullable: true })
  public close!: number

  @Field(type => Float, { nullable: true })
  public volume?: number

  @Field(type => Float, { nullable: true })
  public notional!: number

  @Field(type => Int, { nullable: true })
  public numberOfTrades!: number
}
