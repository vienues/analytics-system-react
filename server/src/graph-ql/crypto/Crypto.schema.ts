import { Field, ID, ObjectType } from 'type-graphql'
import { DateTime, DateTimeScalar } from '../DateScalars'
import { default as QuoteSchema } from '../quote/Quote.schema'

@ObjectType()
export default class Crypto {
  @Field(type => ID)
  public symbol!: string

  @Field()
  public name!: string

  @Field(type => QuoteSchema)
  public quote!: QuoteSchema
}
