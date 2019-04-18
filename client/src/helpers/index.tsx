import * as React from 'react'
import { branch, renderComponent } from 'recompose'

const Loading = () => <div>Loading....</div>

export const withLoadingComponent = branch((props: any) => props.loading, renderComponent(Loading))

export const getOptionsAndProps = (queryVariables: any, dataToPassToProps: string) => ({
  options: () => ({
    variables: queryVariables,
  }),
  props: ({ data }: any) => {
    let transformedProps: any = {}
    const { loading } = data

    transformedProps['loading'] = loading
    transformedProps[dataToPassToProps] = data[dataToPassToProps]
    transformedProps['loadMoreEntries'] = () => {
      return data.fetchMore({
        variables: {
          page: data[dataToPassToProps].currentPage + 1,
        },
        updateQuery: (previousResult: any, { fetchMoreResult: { data: newData } }: any) => {
          if (!newData) {
            return previousResult
          }

          newData[dataToPassToProps].content = [
            ...previousResult[dataToPassToProps].content,
            ...newData[dataToPassToProps].content,
          ]
          return newData
        },
      })
    }

    return transformedProps
  },
})
