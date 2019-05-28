import { Field, Float, ObjectType } from 'type-graphql'

@ObjectType()
export default class FxRate {
  @Field()
  public date!: Date

  @Field()
  public fromCurrency!: string

  @Field()
  public toCurrency!: string

  @Field(type => Float)
  public rate!: number
}
