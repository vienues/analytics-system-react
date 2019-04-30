import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
export default class SearchResult {
  @Field(() => ID)
  id: string | undefined

  @Field()
  name?: string
}
