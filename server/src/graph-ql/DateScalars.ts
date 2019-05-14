import { GraphQLScalarType, Kind } from 'graphql'
import moment from 'moment'

const EPOCH_MAX = 9999999999
const DATE_REGEXP = /(\d\d\d\d)[-]?(\d\d)[-]?(\d\d)/

export function formatDate(date: string | any) {
  if (typeof date === 'string') {
    return [...(date.match(DATE_REGEXP) || [])].slice(1).join('-')
  }

  return date
}

export type DateTime = any
export type Date = any
export type Time = any

export const DateScalar = new GraphQLScalarType({
  description: 'Date in ISO 8601 format, i.e. YYYY-MM-DD',
  name: 'Date',
  parseValue(value: any) {
    return moment(formatDate(value)).toDate()
  },
  serialize(value: any) {
    return moment(formatDate(value)).format('YYYY-MM-DD')
  },
  parseLiteral(ast: any) {
    if (ast.kind === Kind.STRING) {
      return moment(formatDate(ast.value)).toDate()
    }
    return null
  },
})

export const DateTimeScalar = new GraphQLScalarType({
  description: 'Date and time in ISO 8601 format, i.e. YYYY-MM-DDTHH:mm:ss.sssZ',
  name: 'ISODateTime',
  parseValue(value: any) {
    return moment(value).toDate()
  },
  serialize(value: any) {
    if (value) {
      return moment(
        typeof value === 'string'
          ? new Date(value)
          : typeof value === 'number'
          ? value < EPOCH_MAX
            ? value / 1000
            : value
          : value,
      )
        .utc()
        .toISOString()
    }
  },
  parseLiteral(ast: any) {
    if (ast.kind === Kind.STRING) {
      return moment(ast.value).toDate()
    }
    return null
  },
})

export const TimeScalar = new GraphQLScalarType({
  description: 'Hours and minutes in ISO 8601 format HH:mm',
  name: 'Time',
  parseValue(value: any) {
    return moment(value, 'HH:mm').format('HH:mm')
  },
  serialize(value: any) {
    return moment(value, 'HH:mm').format('HH:mm')
  },
  parseLiteral(ast: any) {
    if (ast.kind === Kind.STRING) {
      return moment(ast.value, 'HH:mm').format('HH:mm')
    }
    return null
  },
})
