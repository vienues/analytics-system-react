import { FieldResolver, Resolver, Root } from 'type-graphql'
import { DateTime, DateTimeScalar, formatDate } from '../DateScalars'
import { default as TickSchema } from './Tick.schema'

export interface IAutoResolvedFields {
  datetime: DateTime
}

export type AutoFields = IAutoResolvedFields

@Resolver(of => TickSchema)
export default class Tick {
  @FieldResolver(() => DateTimeScalar)
  public async datetime(@Root() { date, minute }: TickSchema) {
    return `${formatDate(date) || ''}${minute ? `T${minute}` : ''}`
  }
}
