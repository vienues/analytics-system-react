import React from 'react'
import { Box } from 'rebass'
import { Background } from 'styleguide'
import styled from 'styled-components'

const PanelHeader = styled(Box)`
  width: 100%;
  flex: 1;
  background-color: ${props => props.theme.colors.teal};
  border-radius: 4px;
  height: 25px;
`

const Panel = styled(Box)`
  height: 100%;
  width: 100%;
  flex: 1;
`
export default ({ heading, children }) => (
  <Background column w={1}>
    <PanelHeader>{heading}</PanelHeader>
    <Box px={2}>{children}</Box>
  </Background>
)
