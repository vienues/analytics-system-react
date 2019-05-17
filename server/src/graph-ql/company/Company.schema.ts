import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
export default class Company {
  @Field(() => ID)
  get id(): string {
    return this.symbol
  }

  @Field()
  public name?: string

  @Field()
  public symbol!: string

  @Field()
  public exchange!: string

  @Field()
  public industry!: string

  @Field()
  public website!: string

  @Field()
  public description!: string

  @Field({ nullable: true })
  public CEO?: string

  @Field()
  public issueType!: string

  @Field()
  public sector!: string
}
