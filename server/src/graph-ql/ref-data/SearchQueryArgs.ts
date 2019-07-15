import { ArgsType, Field, Int, registerEnumType } from 'type-graphql'
import { IdInputArgs } from '../GenericArgTypes'

export enum MarketSegments {
  CURRENCY = 'currency',
  STOCK = 'stock',
  INDEX = 'index',
  FUTURE = 'future',
  BOND = 'bond',
  CRYPTO = 'crypto',
}

registerEnumType(MarketSegments, {
  description: 'The type of market',
  name: 'MarketSegment',
})

@ArgsType()
export default class SearchQueryArgs {
  @Field()
  public text!: string

  @Field(type => MarketSegments)
  public marketSegment!: MarketSegments
}
