import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { compose } from 'recompose'

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
)
