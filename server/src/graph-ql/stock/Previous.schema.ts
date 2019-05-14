import { Field, Float, ID, Int, ObjectType } from 'type-graphql'
import { DateScalar } from '../DateScalars'

@ObjectType()
export default class Previous {
  @Field(() => ID)
  public symbol!: string

  @Field(type => DateScalar)
  public date!: Date

  @Field(type => Float)
  public open!: number

  @Field(type => Float)
  public high!: number

  @Field(type => Float)
  public low!: number

  @Field(type => Float)
  public close!: number

  @Field(type => Int)
  public volume!: number

  @Field(type => Int)
  public unadjustedVolume!: number

  @Field(type => Float)
  public change!: number

  @Field(type => Float)
  public changePercent!: number

  @Field(type => Float)
  public vwap!: number
}
