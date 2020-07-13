import { Field, ID, ObjectType } from 'type-graphql'
import { MarketSegments } from '../ref-data/SearchQueryArgs'

@ObjectType()
export default class SearchResult {
  @Field(() => ID)
  public id!: string

  @Field()
  public name!: string

  @Field()
  public marketSegment!: MarketSegments
}
