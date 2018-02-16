import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { Divider, ViewportFlex } from '../../styleguide';
import SearchSelect from './Select';

export default class SearchMediator extends Component {
  state = {
    pendingSymbol: false,
  };

  componentWillMount() {
    // TODO update currentSymbol when null and no pending state
  }

  componentDidMount() {
    this.props.updateSearch({ variables: { text: 'aa' } });
  }

  handleChange = async symbol => {
    if (symbol == null) {
      this.setState({ pendingSymbol: this.props.store.currentSymbol });
    }

    await this.props.updateCurrentSymbol({ variables: { symbol } });
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
