import { Box } from 'rebass'
import { Divider, Heading } from '../styleguide'
import React from 'react'

export const Panel = (props: any) => <Box pt={2} {...props} />

export interface IPanelHeadingProps {
  children?: any
  mt?: any
  mb?: any
}

export class PanelHeading extends React.Component<IPanelHeadingProps, {}> {
  public render() {
    return (
      <>
        <Heading>{this.props.children}</Heading>
        <Divider key="divider" my={1} mb={this.props.mb} />
      </>
    )
  }
}
