import { Field, ID, ObjectType } from 'type-graphql'
import { DateTime, DateTimeScalar } from '../DateScalars'
import FxCurrencies from './FxCurrencies.schema'
import FxPairs from './FxPairs.schema'

@ObjectType()
export default class FxSymbols {
  @Field(type => [FxCurrencies!]!)
  public currencies!: FxCurrencies[]

  @Field(type => [FxPairs!]!)
  public pairs!: FxPairs[]
}
