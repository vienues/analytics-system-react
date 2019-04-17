import React, { PureComponent } from 'react'

import AsyncSelectStyled from './AsyncSelectStyled'
import OptionDisplay from './OptionDisplay'

export interface IProps {
  onInputChange: (string: string) => void
  options: any
  onChange: (symbol: any) => void
  value: any
  onBlur: () => void
}

export interface IState {}

export default class SearchSelect extends PureComponent<IProps, IState> {
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
        {...props}
      />
    )
  }
}
