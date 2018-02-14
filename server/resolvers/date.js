import moment from 'moment';
import { Kind } from 'graphql/language';

const EPOCH_MAX = 9999999999;

export default {
  Date: {
    __parseValue(value) {
      return moment(formatDate(value)).toDate();
    },
    __serialize(value) {
      return moment(formatDate(value)).format('YYYY-MM-DD');
    },
    __parseLiteral(ast) {
      if (ast.kind === Kind.STRING) {
        return moment(formatDate(ast.value)).toDate();
      }
      return null;
    },
  },

  DateTime: {
    __parseValue(value) {
      return moment(value).toDate();
    },
    __serialize(value) {
      if (value) {
        return moment(
          typeof value === 'string'
            ? new Date(value)
            : typeof value === 'number' ? (value < EPOCH_MAX ? value / 1000 : value) : value,
        )
          .utc()
          .toISOString();
      }
    },
    __parseLiteral(ast) {
      if (ast.kind === Kind.STRING) {
        return moment(ast.value).toDate();
      }
      return null;
    },
  },

  Time: {
    __parseValue(value) {
      return moment(value, 'HH:mm').format('HH:mm');
    },
    __serialize(value) {
      return moment(value, 'HH:mm').format('HH:mm');
    },
    __parseLiteral(ast) {
      if (ast.kind === Kind.STRING) {
        return moment(ast.value, 'HH:mm').format('HH:mm');
      }
      return null;
    },
  },
};

const DATE_REGEXP = /(\d\d\d\d)[-]?(\d\d)[-]?(\d\d)/;
export function formatDate(date) {
  if (typeof date === 'string') {
    return [...date.match(DATE_REGEXP)].slice(1).join('-');
  }

  return date;
}
