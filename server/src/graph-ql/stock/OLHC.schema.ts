import { Field, Float, ID, ObjectType } from 'type-graphql'
import { DateTimeScalar } from '../DateScalars'

@ObjectType()
export default class OLHC {
  @Field(() => ID)
  public symbol!: string

  @Field(() => Float)
  public open!: number

  @Field(() => Float)
  public close!: number

  @Field(() => DateTimeScalar)
  public openTime!: number

  @Field(() => DateTimeScalar)
  public closeTime!: number

  @Field(type => Float)
  public high!: number

  @Field(type => Float)
  public low!: number
}
