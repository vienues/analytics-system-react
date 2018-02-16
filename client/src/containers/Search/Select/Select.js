import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';

import AsyncSelectStyled from './AsyncSelectStyled';

export default class SearchSelect extends PureComponent {
  render() {
    const { children, ...props } = this.props;

    return (
      <AsyncSelectStyled
        autoFocus
        autoBlur={false}
        key="id"
        valueKey="id"
        labelKey="name"
        placeholder="Enter a stock or symbol …"
        searchPromptText=""
        optionComponent={OptionDisplay}
        // valueComponent={OptionDisplay}
        {...props}
      />
    );
  }
}

export class OptionDisplay extends PureComponent {
  render() {
    const { option: value, ...props } = this.props;

    return (
      <OptionWrap {...props}>
        <Box color="accent" pr={2} w="3.5rem">
          {value.id.toUpperCase()}
        </Box>
        <Box flex="1">{value.name}</Box>
      </OptionWrap>
    );
  }
}

const OptionWrap = styled.div`
  flex: 1;
  display: flex;
  flex-flow: row nowrap;
`;
