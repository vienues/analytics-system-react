import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
  type Security {
    security: String!
    yield: String!
    change: String!
    percentChange: String!
    WTDChg: String!
    OneMonthChange: String!
    ThreeMonthChange: String!
    TwelveMonthChange: String!
    modDur: String!
    moodysRating: String!
    coupon: String!
    maturityDate: String!
  }
  
  type Query {
    priceData: [Security!]!
  }
`;

export default makeExecutableSchema({typeDefs, resolvers});