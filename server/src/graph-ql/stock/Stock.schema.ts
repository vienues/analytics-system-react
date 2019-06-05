import { Field, Float, ID, ObjectType } from 'type-graphql'
import Company from '../company/Company.schema'
import News from '../news/News.schema'
import Quote from '../quote/Quote.schema'
import Stats from '../stats/Stats.schema'
import Tick from '../tick/Tick.schema'
import Previous from './Previous.schema'

@ObjectType()
export default class Stock {
  @Field(type => ID)
  public id!: string

  @Field()
  public symbol!: string

  @Field(type => Float)
  public price!: number

  @Field(type => Stats)
  public stats!: Stats

  @Field(() => [String])
  public peers!: string[]

  @Field(() => [Tick])
  public chart!: Tick[]

  @Field(() => Company)
  public company!: Company

  @Field(() => Quote)
  public quote!: Quote

  @Field(() => [News])
  public news!: (last: number) => News[]

  @Field(() => Previous)
  public previous!: Previous
}
