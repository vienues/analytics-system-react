import { Field, Float, ID, ObjectType } from 'type-graphql'
import Company from '../Company/Company.schema'
import { DateScalar, Date } from '../DateScalars'

@ObjectType()
export default class StockStats {
  @Field(type => ID)
  id: string | undefined

  @Field(type => Company)
  company?: Company

  @Field()
  companyName?: string

  @Field(type => Float)
  marketcap?: number

  @Field(type => Float)
  beta?: number

  @Field(type => Float)
  week52high?: number

  @Field(type => Float)
  week52low?: number

  @Field(type => Float)
  week52change?: number

  @Field(type => Float)
  shortInterest?: number

  @Field(type => DateScalar)
  shortDate?: Date

  @Field(type => Float)
  dividendRate?: number

  @Field(type => Float)
  dividendYield?: number

  @Field(type => DateScalar)
  exDividendDate?: Date

  @Field(type => Float)
  latestEPS?: number

  @Field()
  latestEPSDate?: string

  @Field(type => Float)
  sharesOutstanding?: number

  @Field(type => Float)
  float?: number

  @Field(type => Float)
  returnOnEquity?: number

  @Field(type => Float)
  consensusEPS?: number

  @Field(type => Float)
  numberOfEstimates?: number

  @Field(type => Float)
  symbol?: string
  EBITDA?: number

  @Field(type => Float)
  revenue?: number

  @Field(type => Float)
  grossProfit?: number

  @Field(type => Float)
  cash?: number

  @Field(type => Float)
  debt?: number

  @Field(type => Float)
  ttmEPS?: number

  @Field(type => Float)
  revenuePerShare?: number

  @Field(type => Float)
  revenuePerEmployee?: number

  @Field(type => Float)
  peRatioHigh?: number

  @Field(type => Float)
  peRatioLow?: number

  @Field()
  EPSSurpriseDollar?: string

  @Field(type => Float)
  EPSSurprisePercent?: number

  @Field(type => Float)
  returnOnAssets?: number

  @Field()
  returnOnCapital?: string

  @Field(type => Float)
  profitMargin?: number

  @Field(type => Float)
  priceToSales?: number

  @Field(type => Float)
  priceToBook?: number

  @Field(type => Float)
  day200MovingAvg?: number

  @Field(type => Float)
  day50MovingAvg?: number

  @Field(type => Float)
  institutionPercent?: number

  @Field()
  insiderPercent?: string

  @Field(type => Float)
  shortRatio?: number

  @Field(type => Float)
  year5ChangePercent?: number

  @Field(type => Float)
  year2ChangePercent?: number

  @Field(type => Float)
  year1ChangePercent?: number

  @Field(type => Float)
  ytdChangePercent?: number

  @Field(type => Float)
  month6ChangePercent?: number

  @Field(type => Float)
  month3ChangePercent?: number

  @Field(type => Float)
  month1ChangePercent?: number

  @Field(type => Float)
  day5ChangePercent?: number
}
