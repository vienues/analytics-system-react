import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { Box } from 'rebass'

export interface IProps {
  option: {
    name: string

    id: string
  }
  onSelect: (event: React.SyntheticEvent<HTMLDivElement, Event>) => void
}

export interface IState {}

export class OptionDisplay extends PureComponent<IProps, IState> {
  public handleMouseDown = (event: any) => {
    event.preventDefault()
    event.stopPropagation()
    this.props.onSelect(event)
    //this.props.onSelect(this.props.option, event)
  }

  public render() {
    const { option: value, ...props } = this.props

    return (
      <OptionWrap {...props} onMouseDown={this.handleMouseDown}>
        <Box color="accent" pr={2}>
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

export default OptionDisplay
