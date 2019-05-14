import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
export default class SearchResult {
  @Field(() => ID)
  public id!: string

  @Field()
  public name!: string
}
