import { Box } from 'rebass'
import { Divider, Heading } from '../styleguide'
import React from 'react'

export const Panel = (props: any) => <Box pt={2} {...props} />

export const PanelHeading = ({ children, mt, mb }: { children: any; mt?: any; mb?: any }) => [
  <Heading>{children}</Heading>,
  <Divider key="divider" my={1} mb={mb} />,
]
