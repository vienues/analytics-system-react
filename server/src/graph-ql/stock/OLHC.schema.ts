import { Field, Float, ID, ObjectType } from 'type-graphql'
import { DateTimeScalar } from '../DateScalars'

@ObjectType()
export default class OLHC {
  @Field(() => ID)
  public symbol!: string

  @Field(() => Float, { nullable: true })
  public open?: number

  @Field(() => Float, { nullable: true })
  public close?: number

  @Field(() => DateTimeScalar, { nullable: true })
  public openTime?: number

  @Field(() => DateTimeScalar, { nullable: true })
  public closeTime?: number

  @Field(type => Float, { nullable: true })
  public high?: number

  @Field(type => Float, { nullable: true })
  public low?: number
}
