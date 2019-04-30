import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
export default class News {
  @Field(() => ID)
  id: string | undefined

  @Field()
  datetime?: string

  @Field()
  headline?: string

  @Field()
  source?: string

  @Field()
  url?: string

  @Field()
  summary?: string

  @Field()
  related?: string
}
