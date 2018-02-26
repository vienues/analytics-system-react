import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { Box } from 'rebass'

import AsyncSelectStyled from './AsyncSelectStyled'

export default class SearchSelect extends PureComponent {
  render() {
    const { ...props } = this.props

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
    )
  }
}

export class OptionDisplay extends PureComponent {
  handleMouseDown = event => {
    event.preventDefault()
    event.stopPropagation()
    this.props.onSelect(this.props.option, event)
  }

  render() {
    const { option: value, ...props } = this.props

    return (
      <OptionWrap {...props} onMouseDown={this.handleMouseDown}>
        <Box color="accent" pr={2} w="3.5rem">
          {value.id.toUpperCase()}
        </Box>
        <Box flex="1">{value.name}</Box>
      </OptionWrap>
    )
  }
}

const OptionWrap = styled.div`
  flex: 1;
  display: flex;
  flex-flow: row nowrap;
`
