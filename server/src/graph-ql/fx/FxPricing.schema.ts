import { Field, Float, ID, ObjectType } from 'type-graphql'
import { Date, DateScalar, DateTime, DateTimeScalar } from '../DateScalars'
import { default as FxPairs } from './FxPairs.schema'

@ObjectType()
export default class FxPricing {
  @Field(type => FxPairs)
  public Pair!: FxPairs

  @Field(type => Float)
  public ask!: number

  @Field(type => Float)
  public bid!: number

  @Field(type => DateTimeScalar, { nullable: true })
  public creationTimestamp!: DateTime

  @Field(type => Float)
  public mid!: number

  @Field(type => DateScalar)
  public valueDate!: Date
}
