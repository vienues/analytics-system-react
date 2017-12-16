import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';
import typeDefs from '../../schema.graphql'

export default makeExecutableSchema({typeDefs, resolvers});