import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { Divider, ViewportFlex } from '../../styleguide';
import SearchSelect from './Select';

export default class Search extends Component {
  state = {
    pendingSymbol: false,
  };

  componentWillMount() {
    // warm up cache
    this.props.updateSearch({ variables: { text: 'aa' } });
  }

  async componentWillReceiveProps(nextProps) {
    const { store: { currentSymbol }, data: { stock } } = nextProps;
    const { pendingSymbol } = this.state;

    if (currentSymbol == null && stock != null) {
      const symbol = { ...stock.company, __typename: 'ReferenceSymbol' };

      if (!pendingSymbol) {
        this.setState({ pendingSymbol: symbol });
        await this.props.updateCurrentSymbol({ variables: { symbol } });
        this.setState({ pendingSymbol: false });
      }
    }
  }

  handleChange = async symbol => {
    const { currentSymbol } = this.props.store;
    const { pendingSymbol } = this.state;

    if (!symbol && currentSymbol) {
      this.setState({ pendingSymbol: currentSymbol });
    }

    await this.props.updateCurrentSymbol({ variables: { symbol } });
  };

  handleBlur = async () => {
    const { currentSymbol } = this.props.store;
    const { pendingSymbol } = this.state;

    if (pendingSymbol) {
      this.setState({ pendingSymbol: false });

      if (!currentSymbol) {
        this.props.updateCurrentSymbol({ variables: { symbol: pendingSymbol } });
      }
    }
  };

  filterOptions = options => options;
  loadOptions = async text => {
    if (!text || text.length < 2) {
      return [];
    }

    const results = await this.props.updateSearch({ variables: { text } });

    return {
      options: results.data.updateSearch,
    };
  };

  render() {
    const { children, store: { currentSymbol } } = this.props;

    return (
      <ViewportFlex wrap f={5} align="center">
        <SearchSelect
          loadOptions={this.loadOptions}
          filterOptions={this.filterOptions}
          onChange={this.handleChange}
          value={currentSymbol}
          onBlur={this.handleBlur}
        />
        {children}

        <Divider my={1} />
        {
          <Route
            path={`/stock/:id`}
            children={props => {
              const { params = {} } = props.match || {};
              if (currentSymbol && currentSymbol.id !== params.id) {
                return <Redirect to={`/stock/${currentSymbol.id}`} />;
              }

              return null;
            }}
          />
        }
      </ViewportFlex>
    );
  }
}
