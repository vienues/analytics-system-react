import React, { Component } from 'react';
import { Flex, Box } from 'rebass';
import Search from 'material-ui-icons/Search';

import { Switch, Route, Redirect } from 'react-router-dom';

import { Divider, Lead, ViewportFlex } from '../../styleguide';
import AppLayout from '../AppLayout';
import SearchSelect from './Select';

export default class SearchMediator extends Component {
  componentDidMount() {
    this.props.updateSearch({ variables: { text: 'aa' } });
  }

  handleChange = async symbol => {
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
    const { children, stateQuery: { currentSymbol } } = this.props;

    return (
      <AppLayout>
        <Switch>
          {currentSymbol && <Route path={`/stock/${currentSymbol.id}`} />}
          {currentSymbol && <Redirect to={`/stock/${currentSymbol.id}`} />}
          <Route path="/" exact />
          <Redirect to="/" />
        </Switch>
        <ViewportFlex column>
          <Flex>
            <Box flex="1">
              <SearchSelect
                loadOptions={this.loadOptions}
                filterOptions={this.filterOptions}
                onChange={this.handleChange}
                value={currentSymbol}
              >
                <Lead is="div" f={5} color="offwhite">
                  <Flex align="center">
                    <Flex mr={1} color="accent">
                      <Search fontSize />
                    </Flex>
                  </Flex>
                </Lead>
              </SearchSelect>
            </Box>
          </Flex>
          <Divider my={1} />
        </ViewportFlex>
        {children}
      </AppLayout>
    );
  }
}
