import { compose, withProps } from 'recompose'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { withRouter } from 'react-router-dom'

export default compose(
  graphql(
    gql`
      query searchQuery($id: ID!) {
        stock(id: $id) {
          id
          company {
            id
            name
            exchange
          }
        }
      }
    `,
    {
      skip: ownProps => !ownProps.id,
      options: ({ id }) => ({
        variables: { id },
      }),
    },
  ),
  graphql(
    gql`
      mutation search($text: String!) {
        updateSearch(text: $text) @client {
          id
          name
        }
      }
    `,
    { name: 'updateSearch' },
  ),
  withRouter,
  withProps(props => {
    return {
      onSymbolChanged: id => {
        props.history.push(`${props.url}${id}`)
        if (window.fin) {
          window.fin.desktop.InterApplicationBus.publish('SYMBOL.CHANGE', {
            data: {
              selection: {
                id,
                symbol: id,
                __typename: 'Selection',
              },
            },
          })
        }
      },
    }
  }),
)
