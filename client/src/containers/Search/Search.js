import React, { Component } from 'react';
import SearchSelect from './Select';

export default class Search extends Component {
  state = {
    currentSymbol: null,
  };

  componentWillReceiveProps(nextProps) {
    //
    const { data: { stock } = {} } = nextProps;
    const currentSymbol = this.state.currentSymbol;
    if (currentSymbol == null && stock != null) {
      const symbol = { ...stock.company };
      this.setState({ currentSymbol: symbol });
    }
  }

  handleChange = symbol => {
    this.setState({ currentSymbol: symbol }, () => {
      if (this.state.currentSymbol) {
        this.props.onSymbolChanged(this.state.currentSymbol.id);
      }
    });
  };

  filterOptions = options => options;
  loadOptions = async text => {
    if (!text) {
      return [];
    }

    const results = await this.props.updateSearch({ variables: { text } });

    return {
      options: results.data.updateSearch,
    };
  };

  render() {
    return (
      <SearchSelect
        loadOptions={this.loadOptions}
        filterOptions={this.filterOptions}
        onChange={this.handleChange}
        value={this.state.currentSymbol}
        onBlur={this.handleBlur}
      />
    );
  }
}
