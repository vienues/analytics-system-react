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
    props: (props: any) => {
      return {
        ...props,
        subscribeToSelection: (params: any) => {
          return props.data.subscribeToMore({
            document: SUBSCRIBE_TO_SELECTION,
            updateQuery: (prev: any, { subscriptionData }: any) => {
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
      const viewmodel = this as any
      viewmodel.subscription = viewmodel.props.subscribeToSelection()
    },
    componentWillUnmount() {
      const viewmodel = this as any
      viewmodel.subscription.unsubscribe()
    },
  }),
  loadable,
  withProps((props: any) => ({ id: props.data.selection.id })),
)
