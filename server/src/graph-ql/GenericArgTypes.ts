import { ArgsType, Field, ID } from 'type-graphql'

@ArgsType()
export class IdInputArgs {
  @Field(type => ID)
  public id: string = ''
}
