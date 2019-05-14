import { ArgsType, Field } from 'type-graphql'

@ArgsType()
export default class SubscriptionQuoteArgs {
  @Field(type => [String])
  public symbols: string[] = []
}
