import autobahn from 'autobahn'
import logger from './logger'

export const ReactiveTraderCloud = {
  init: async () => {
    autobahn.log = {
      debug: (...args: any[]) => {
        logger.info(JSON.stringify(args))
      },
    }
    const connection = new autobahn.Connection({
      realm: 'com.weareadaptive.reactivetrader',
      url: 'ws://web-demo.adaptivecluster.com:80/ws',
    })
    let statusSubscription: any
    connection.onopen = async (session: any) => {
      logger.info('Subscribing')
      statusSubscription = await session.subscribe('status', async (args: any) => {
        if (args[0].Type === 'priceHistory') {
          session.unsubscribe(statusSubscription)
          const results = await session.call(`${args[0].Instance}.getPriceHistory`, [
            { payload: 'EURUSD', replyTo: '', Username: 'CZA' },
          ])
        } else if (args[0].Type === 'pricing') {
          const results = await session.call(`${args[0].Instance}.getPriceUpdates`, [{ payload: { symbol: 'EURUSD' } }])
          console.log(results)
        }
        logger.info('Event:', args[0])
      })
    }
    connection.open()
  },
}
