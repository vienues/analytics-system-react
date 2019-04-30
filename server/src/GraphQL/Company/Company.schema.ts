import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
export default class Company {
  @Field(() => ID)
  id: string | undefined

  @Field()
  symbol?: string

  @Field()
  name?: string

  @Field()
  exchange?: string

  @Field()
  industry?: string

  @Field()
  website?: string

  @Field()
  description?: string

  @Field()
  CEO?: string

  @Field()
  issueType?: string

  @Field()
  sector?: string

  @Field(() => [String])
  peers?: [string]
}
