import { IResolvers } from "apollo-server"

const resolvers: IResolvers = {
    Query: {
      config: () => {
        return {
          isSandbox: (process.env.IEXCLOUD_PUBLIC_KEY || '').toUpperCase().startsWith('T')
        }
      },
    },
  }
  
  export default resolvers