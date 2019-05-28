import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
export default class FxCurrencies {
  @Field(() => ID)
  public code!: string

  @Field()
  public name!: string
}
