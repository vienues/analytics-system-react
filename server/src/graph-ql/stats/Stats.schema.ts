import { Field, Float, ID, ObjectType } from 'type-graphql'
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

  @Field(type => Company)
  public company!: Company

  @Field()
  public companyName!: string

  @Field(type => Float)
  public marketcap!: number

  @Field(type => Float)
  public beta!: number

  @Field(type => Float)
  public week52high!: number

  @Field(type => Float)
  public week52low!: number

  @Field(type => Float)
  public week52change!: number

  @Field(type => Float)
  public shortInterest!: number

  @Field(type => DateScalar)
  public shortDate!: Date

  @Field(type => Float)
  public dividendRate!: number

  @Field(type => Float)
  public dividendYield!: number

  @Field(type => DateScalar)
  public exDividendDate!: Date

  @Field(type => Float)
  public latestEPS!: number

  @Field()
  public latestEPSDate!: string

  @Field(type => Float)
  public sharesOutstanding!: number

  @Field(type => Float)
  public float!: number

  @Field(type => Float)
  public returnOnEquity!: number

  @Field(type => Float)
  public consensusEPS!: number

  @Field(type => Float)
  public numberOfEstimates!: number

  @Field(type => Float)
  public EBITDA!: number

  @Field(type => Float)
  public revenue!: number

  @Field(type => Float)
  public grossProfit!: number

  @Field(type => Float)
  public cash!: number

  @Field(type => Float)
  public debt!: number

  @Field(type => Float)
  public ttmEPS!: number

  @Field(type => Float)
  public revenuePerShare!: number

  @Field(type => Float, { nullable: true })
  public revenuePerEmployee?: number

  @Field(type => Float)
  public peRatioHigh!: number

  @Field(type => Float)
  public peRatioLow!: number

  @Field({ nullable: true })
  public EPSSurpriseDollar?: string

  @Field(type => Float)
  public EPSSurprisePercent!: number

  @Field(type => Float)
  public returnOnAssets!: number

  @Field({ nullable: true })
  public returnOnCapital?: string

  @Field(type => Float)
  public profitMargin!: number

  @Field(type => Float)
  public priceToSales!: number

  @Field(type => Float)
  public priceToBook!: number

  @Field(type => Float)
  public day200MovingAvg!: number

  @Field(type => Float)
  public day50MovingAvg!: number

  @Field(type => Float)
  public institutionPercent!: number

  @Field({ nullable: true })
  public insiderPercent?: string

  @Field(type => Float, { nullable: true })
  public shortRatio?: number

  @Field(type => Float)
  public year5ChangePercent!: number

  @Field(type => Float)
  public year2ChangePercent!: number

  @Field(type => Float)
  public year1ChangePercent!: number

  @Field(type => Float)
  public ytdChangePercent!: number

  @Field(type => Float)
  public month6ChangePercent!: number

  @Field(type => Float)
  public month3ChangePercent!: number

  @Field(type => Float)
  public month1ChangePercent!: number

  @Field(type => Float)
  public day5ChangePercent!: number
}
