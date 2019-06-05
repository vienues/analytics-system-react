import { Field, ID, ObjectType } from 'type-graphql'
import { DateTime, DateTimeScalar } from '../DateScalars'

@ObjectType()
export default class News {
  @Field(() => ID)
  get id(): string {
    return this.url
  }

  @Field(type => DateTimeScalar)
  public datetime!: DateTime

  @Field()
  public headline!: string

  @Field()
  public source!: string

  @Field()
  public url!: string

  @Field()
  public summary!: string

  @Field()
  public related!: string
}
