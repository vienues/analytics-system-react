import { ArgsType, Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
@ArgsType()
export default class FxPairs {
  @Field()
  public from!: string

  @Field()
  public to!: string
}
