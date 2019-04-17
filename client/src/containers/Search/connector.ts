import { compose, withProps } from 'recompose'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { withRouter } from 'react-router-dom'
import { ISearchProps } from './Search'

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
      skip: (ownProps: any) => !ownProps.id,
      options: ({ id }) => ({
        variables: { id },
      }),
    },
  ),
  graphql(
    gql`
      query search($text: String!) {
        search(text: $text) {
          id
          name
        }
      }
    `,
    {
      name: 'search',
      options: {
        variables: {
          text: '',
        },
      },
    },
  ),
  withRouter,
  withProps((props: ISearchProps) => {
    return {
      onSymbolChanged: (id: number) => {
        props.history.push(`${props.url}${id}`)
        if ((window as any).fin) {
          ;(window as any).fin.desktop.InterApplicationBus.publish('SYMBOL.CHANGE', {
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
