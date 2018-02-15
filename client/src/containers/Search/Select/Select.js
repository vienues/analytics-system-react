import React, { Component, Fragment } from 'react';
import styled, { css } from 'styled-components';

import { Redirect } from 'react-router-dom';

import createFilterOptions from 'react-select-fast-filter-options';
import Select from 'react-select';
import VirtualizedSelect from 'react-virtualized-select';

import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css';
import 'react-virtualized-select/styles.css';

export default class SearchSelect extends Component {
  static filterOptions = createFilterOptions({
    indexes: ['id', 'name'],
    labelKey: 'id',
    valueKey: 'name',
  });

  state = {
    selectedOption: '',
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };

  render() {
    const { symbols, ...props } = this.props;
    const { selectedOption, selectedOption: { id } = {} } = this.state;
    const value = selectedOption && selectedOption.value;

    return (
      <Fragment>
        <StyledVirtualizedSelect
          // autofocus
          key="id"
          valueKey="id"
          labelKey="name"
          value={id}
          onChange={this.handleChange}
          // filterOptions={SearchSelect.filterOptions}
          options={symbols}
          {...props}
        />
        {selectedOption && <Redirect to={`/stock/${id}`} push />}
      </Fragment>
    );
  }
}

const StyledVirtualizedSelect = styled(VirtualizedSelect)`
  background-color: transparent;

  .Select-control {
    background-color: transparent;
    border: none;
    color: white;
    height: 2rem;
  }

  &.Select {
    &.is-focused,
    &.has-value,
    &.is-focused:not(.is-open) {
      & .Select {
        &-control {
          background-color: transparent;
          border: none;
          color: white;
          height: 2rem;
        }
      }
    }
  }
`;
