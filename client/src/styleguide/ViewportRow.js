import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'rebass'

export const ViewportFlex = ({ className, ...props }) => (
  <WithPadding className={className} {...props}>
    <Centered {...props} />
  </WithPadding>
)

const WithPadding = styled(Box).attrs({ px: [1, 2, 3] })`
  min-width: 100vw;
  max-width: 100vw;
`

const Centered = styled(Flex)`
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
`
