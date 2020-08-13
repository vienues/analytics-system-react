import { IResolvers } from 'graphql-tools'
import NewsService from './News.service'
import { Container } from 'typedi'

const newsService = Container.get(NewsService)

const resolvers: IResolvers = {
  News: {
    id: parent => {
      return parent.url
    },
  },
  Query: {
    news: async (_, args: { id: string; last: number }) => {
      if (args.last) {
        return newsService.getLatestNews(args.id, args.last)
      } else {
        return newsService.getNews(args.id)
      }
    },
  },
}

export default resolvers
