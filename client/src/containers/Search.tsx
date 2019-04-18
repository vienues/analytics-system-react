import React from 'react'
import { ChildProps, graphql } from 'react-apollo'
import { withRouter } from 'react-router-dom'
import { compose, withProps } from 'recompose'
import SearchSelect from '../components/Select'
import SearchQuery from '../graphql/SearchConnection.graphql'
import SimpleSearchQuery from '../graphql/SimpleSearchConnection.graphql'

export interface ISearchProps {
  search: {
    search: any
    refetch: ({}) => void
  }
  id: number
  onSymbolChanged: (id: number) => void
  history: any
  url: any
}

export interface IState {
  currentSymbol: {
    id: number
  } | null
}

export class Search extends React.Component<ChildProps<ISearchProps, Response>, IState> {
  constructor(props: ChildProps<ISearchProps, Response>) {
    super(props)
    this.state = {
      currentSymbol: null,
    }
    this.onTextChange = this.onTextChange.bind(this)
  }

  public componentWillReceiveProps(nextProps: any) {
    const { data } = nextProps
    let stock = null
    if (data) {
      stock = data.stock
    }
    const currentSymbol = this.state.currentSymbol
    if (currentSymbol == null && stock != null) {
      const symbol = { ...stock.company }
      this.setState({ currentSymbol: symbol })
    }
  }

  public handleChange = (symbol: any) => {
    this.setState({ currentSymbol: symbol }, () => {
      if (this.state.currentSymbol) {
        this.props.onSymbolChanged(this.state.currentSymbol.id)
      }
    })
  }

  public onTextChange = (text: string) => {
    this.props.search.refetch({ text })
  }

  public render() {
    return (
      <SearchSelect
        onInputChange={this.onTextChange}
        options={this.props.search.search}
        onChange={this.handleChange}
        value={this.state.currentSymbol}
        onBlur={(this as any).handleBlur}
      />
    )
  }
}

const searchProps = (props: ISearchProps) => {
  return {
    onSymbolChanged: (id: number) => {
      props.history.push(`${props.url}${id}`)
      if ((window as any).fin) {
        ;(window as any).fin.desktop.InterApplicationBus.publish('SYMBOL.CHANGE', {
          data: {
            selection: {
              __typename: 'Selection',
              id,
              symbol: id,
            },
          },
        })
      }
    },
  }
}

export default compose(
  graphql(SearchQuery, {
    options: ({ id }) => ({
      variables: { id },
    }),
    skip: (ownProps: any) => !ownProps.id,
  }),
  graphql(SimpleSearchQuery, {
    name: 'search',
    options: {
      variables: {
        text: '',
      },
    },
  }),
  withRouter,
  withProps(searchProps),
  // @ts-ignore
)(Search)
