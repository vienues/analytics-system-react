import { FieldResolver, Resolver, Root } from 'type-graphql'
import { default as TickSchema } from './Tick.schema'
import { formatDate, DateTimeScalar } from '../DateScalars'

@Resolver(of => TickSchema)
export default class Tick {
  @FieldResolver(() => DateTimeScalar)
  async datetime(@Root() { date, minute }: TickSchema) {
    return `${formatDate(date) || ''}${minute ? `T${minute}` : ''}`
  }
}
