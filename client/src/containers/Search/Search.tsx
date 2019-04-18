import React from 'react'
import SearchSelect from '../../components/Select'

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

export default class Search extends React.Component<ISearchProps, IState> {
  constructor(props: ISearchProps) {
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
