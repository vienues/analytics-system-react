import gql from 'graphql-tag'
import { lifecycle, compose } from 'recompose'
import { graphql } from 'react-apollo'

const getMarkets = gql`
  query QuoteQuery {
    markets {
      id
      companyName
      change
      changePercent
      latestPrice
    }
  }
`

const subscribeMarket = gql`
  subscription onQuoteQuery($markets: [String!]!) {
    getQuotes(symbols: $markets) {
      id
      changePercent
      latestPrice
    }
  }
`

const connectSubscription = lifecycle({
  componentWillReceiveProps(nextProps: any) {
    if (!nextProps.data.loading) {
      // Check for existing subscription
      // @ts-ignore
      if (this.unsubscribe) {
        // Check if props have changed and, if necessary, stop the subscription
        if (this.props.data.markets.length !== nextProps.data.markets.length) {
          console.log('unsubscribe')
          // @ts-ignore
          this.unsubscribe()
        }
        return
      }
    }

    ;(this as any).unsubscribe = nextProps.data.subscribeToMore({
      document: subscribeMarket,
      variables: {
        markets: nextProps.data.markets.map((x: any) => x.id),
      },
      updateQuery: ({ markets }: any, { subscriptionData, variables }: any) => {
        const copy = [...markets]
        const index = copy.findIndex(({ id }) => id === subscriptionData.data.getQuotes.id)
        const x = { ...copy[index] }
        copy.splice(index, 1, x)
        return { markets: copy }
      },
    })
  },
})

export default compose(
  graphql(getMarkets),
  connectSubscription,
)
