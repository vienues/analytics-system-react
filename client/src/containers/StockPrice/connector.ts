import gql from 'graphql-tag'
import { compose, lifecycle } from 'recompose'
import { graphql } from 'react-apollo'

const query = gql`
  query StockPriceQuery($id: ID!) {
    stock(id: $id) {
      id
      company {
        id
        name
      }
      quote {
        id
        change
        changePercent
        latestPrice
      }
    }
  }
`

const subscribeMarket = gql`
  subscription($markets: [String!]!) {
    getQuotes(symbols: $markets) {
      id
      change
      changePercent
      latestPrice
    }
  }
`

const connectQuery = graphql(query, {
  skip: (ownProps: any) => !ownProps.id,
})

const connectSubscription = lifecycle({
  componentWillReceiveProps(nextProps: any) {
    const viewmodel = this as any
    if (nextProps.data.loading) {
      return
    }

    if (!viewmodel.props.data.stock) {
      viewmodel.unsubscribe && viewmodel.unsubscribe()
      return
    }

    if (viewmodel.props.data.stock.id !== nextProps.data.stock.id) {
      viewmodel.unsubscribe && viewmodel.unsubscribe()
      viewmodel.unsubscribe = nextProps.data.subscribeToMore({
        document: subscribeMarket,
        variables: {
          markets: nextProps.data.stock.id,
        },
        updateQuery: (prev: any, { subscriptionData }: any) => {
          const stockCpy = { ...prev.stock, quote: subscriptionData.data.getQuotes }
          return { ...prev, stock: stockCpy }
        },
      })
    }
  },
  componentWillUnmount() {
    const viewmodel = this as any
    if (viewmodel.unsubscribe) {
      viewmodel.unsubscribe()
    }
  },
})

export default compose(
  connectQuery,
  connectSubscription,
)
