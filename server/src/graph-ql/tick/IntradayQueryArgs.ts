import { ArgsType, Field, Int } from 'type-graphql'

@ArgsType()
export default class IntradayQuoteArgs {
  @Field(type => String)
  public symbol!: string

  @Field(type => Int)
  public lastN!: number
}
