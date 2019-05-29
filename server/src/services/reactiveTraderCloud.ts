import autobahn from 'autobahn'
import logger from './logger'

export const ReactiveTraderCloud = {
  init: async () => {
    const connection = new autobahn.Connection({
      realm: 'com.weareadaptive.reactivetrader',
      url: 'ws://web-demo.adaptivecluster.com:80/ws',
    })
    let statusSubscription: any
    connection.onopen = async (session: any) => {
      logger.info('Subscribing')
      statusSubscription = await session.subscribe('status', (args: any) => {
        if (args[0].Type === 'pricing') {
          session.unsubscribe(statusSubscription)
          session.subscribe(`${args[0].Instance}.getPriceUpdates`, (priceArgs: any) => {
            logger.info('Event:', priceArgs[0])
          })
        }
        logger.info('Event:', args[0])
      })
    }
    connection.open()
  },
}
