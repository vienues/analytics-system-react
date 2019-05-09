import { ArgsType, Field, ID } from 'type-graphql'

@ArgsType()
export class IdInputArgs {
  @Field(type => ID)
  id: string = ''
}
