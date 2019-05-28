import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
export default class FxPairs {
  @Field()
  public from!: string

  @Field()
  public to!: string
}
