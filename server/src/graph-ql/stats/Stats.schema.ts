import { Field, Float, ID, Int, ObjectType } from 'type-graphql'
import Company from '../company/Company.schema'
import { Date, DateScalar } from '../DateScalars'

@ObjectType()
export default class Stats {
  @Field(type => ID)
  get id(): string {
    return this.symbol
  }

  @Field()
  public symbol!: string

  @Field(type => Company, { nullable: true })
  public company?: Company

  @Field({ nullable: true })
  public companyName?: string

  @Field(type => Float, { nullable: true })
  public marketcap?: number

  @Field(type => Float, { nullable: true })
  public week52high?: number

  @Field(type => Float, { nullable: true })
  public week52low?: number

  @Field(type => Float, { nullable: true })
  public week52change?: number

  @Field(type => Float, { nullable: true })
  public sharesOutstanding?: number

  @Field(type => Float, { nullable: true })
  public float?: number

  @Field(type => Int, { nullable: true })
  public avg10Volume?: number

  @Field(type => Int, { nullable: true })
  public avg30Volume?: number

  @Field(type => Float, { nullable: true })
  public day200MovingAvg?: number

  @Field(type => Float, { nullable: true })
  public day50MovingAvg?: number

  @Field(type => Int, { nullable: true })
  public employees?: number

  @Field(type => Float, { nullable: true })
  public ttmEPS?: number

  @Field(type => Float, { nullable: true })
  public ttmDividendRate?: number

  @Field(type => Float, { nullable: true })
  public dividendYield?: number

  @Field(type => DateScalar, { nullable: true })
  public nextDividendDate?: Date

  @Field(type => DateScalar, { nullable: true })
  public exDividendDate?: Date

  @Field(type => DateScalar, { nullable: true })
  public nextEarningsDate?: Date

  @Field(type => Float, { nullable: true })
  public peRatio?: number

  @Field(type => Float, { nullable: true })
  public beta?: number

  @Field(type => Float, { nullable: true })
  public maxChangePercent?: number

  @Field(type => Float, { nullable: true })
  public year5ChangePercent?: number

  @Field(type => Float, { nullable: true })
  public year2ChangePercent?: number

  @Field(type => Float, { nullable: true })
  public year1ChangePercent?: number

  @Field(type => Float, { nullable: true })
  public ytdChangePercent?: number

  @Field(type => Float, { nullable: true })
  public month6ChangePercent?: number

  @Field(type => Float, { nullable: true })
  public month3ChangePercent?: number

  @Field(type => Float, { nullable: true })
  public month1ChangePercent?: number

  @Field(type => Float, { nullable: true })
  public day30ChangePercent?: number

  @Field(type => Float, { nullable: true })
  public day5ChangePercent?: number
}
