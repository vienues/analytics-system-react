import { Field, Float, ID, ObjectType } from 'type-graphql'
import StockStats from './StockStats.schema'
import Tick from '../tick/Tick.schema'
import Company from '../company/Company.schema'
import Quote from '../quote/Quote.schema'
import News from '../news/News.schema'

@ObjectType()
export default class Stock {
  @Field(type => ID)
  id: string | undefined

  @Field()
  symbol?: string

  @Field(type => Float)
  price?: number

  @Field(type => StockStats)
  stats?: StockStats

  @Field(() => [String])
  peers?: string[]

  @Field(() => [Tick])
  chart?: Tick[]

  @Field(() => Company)
  company?: Company

  @Field(() => Quote)
  quote?: Quote

  @Field(() => [News])
  latestNews?: News[]

  @Field(() => Tick)
  previous?: Tick
}
