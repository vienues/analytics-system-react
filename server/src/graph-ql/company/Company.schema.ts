import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
export default class Company {
  @Field(() => ID)
  get id(): string {
    return this.symbol
  }

  @Field({ nullable: true })
  public name?: string

  @Field()
  public symbol!: string

  @Field({ nullable: true })
  public exchange?: string

  @Field({ nullable: true })
  public industry?: string

  @Field({ nullable: true })
  public website?: string

  @Field({ nullable: true })
  public description!: string

  @Field({ nullable: true })
  public CEO?: string

  @Field({ nullable: true })
  public issueType?: string

  @Field({ nullable: true })
  public sector?: string
}
