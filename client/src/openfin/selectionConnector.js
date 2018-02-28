import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { compose, lifecycle, withProps } from 'recompose'
import { loadable } from '../common'

const SUBSCRIBE_TO_SELECTION = gql`
  subscription SelectionChange {
    selection @openfin {
      id
      symbol
    }
  }
`

const QUERY_SELECTION = gql`
  query GetSelection {
    selection @openfin {
      id
      symbol
    }
  }
`
export default compose(
  graphql(QUERY_SELECTION, {
    props: props => {
      return {
        ...props,
        subscribeToSelection: params => {
          return props.data.subscribeToMore({
            document: SUBSCRIBE_TO_SELECTION,
            updateQuery: (prev, { subscriptionData }) => {
              if (!subscriptionData.data) {
                return prev
              }
              return { ...subscriptionData.data }
            },
          })
        },
      }
    },
  }),
  lifecycle({
    componentWillMount() {
      this.subscription = this.props.subscribeToSelection()
    },
    componentWillUnmount() {
      this.subscription.unsubscribe()
    },
  }),
  loadable,
  withProps(props => ({ id: props.data.selection.id })),
)
