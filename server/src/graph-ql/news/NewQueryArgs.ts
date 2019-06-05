import { ArgsType, Field, Int } from 'type-graphql'
import { IdInputArgs } from '../GenericArgTypes'

@ArgsType()
export default class NewsQueryArgs extends IdInputArgs {
  @Field(() => Int)
  public last: number = 0
}
