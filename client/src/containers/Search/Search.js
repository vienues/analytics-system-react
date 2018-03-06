import React, { Component } from 'react'
import SearchSelect from './Select'

export default class Search extends Component {
  state = {
    currentSymbol: null,
  }

  componentWillReceiveProps(nextProps) {
    const { data: { stock } = {} } = nextProps
    const currentSymbol = this.state.currentSymbol
    if (currentSymbol == null && stock != null) {
      const symbol = { ...stock.company }
      this.setState({ currentSymbol: symbol })
    }
  }

  handleChange = symbol => {
    this.setState({ currentSymbol: symbol }, () => {
      if (this.state.currentSymbol) {
        this.props.onSymbolChanged(this.state.currentSymbol.id)
      }
    })
  }

  onTextChange = text => {
    this.props.search.refetch({ text })
  }

  render() {
    return (
      <SearchSelect
        onInputChange={this.onTextChange.bind(this)}
        options={this.props.search.search}
        onChange={this.handleChange}
        value={this.state.currentSymbol}
        onBlur={this.handleBlur}
      />
    )
  }
}
