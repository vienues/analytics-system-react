import { IResolvers } from 'graphql-tools'
import { formatDate } from '../DateScalars'

const resolvers: IResolvers = {
  Tick: {
    datetime: parent => {
      return `${formatDate(parent.date) || ''}${parent.minute ? `T${parent.minute}` : ''}`
    },
  },
}

export default resolvers
