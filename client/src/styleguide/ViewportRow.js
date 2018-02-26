import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'rebass'

export const ViewportRow = ({ className, ...props }) => (
  <ViewportRowPadding className={className}>
    <ViewportRowBody {...props} column />
  </ViewportRowPadding>
)

export const ViewportFlex = ({ className, ...props }) => (
  <ViewportRow className={className}>
    <ViewportRowBodyFlex {...props} />
  </ViewportRow>
)

export const ViewportRowPadding = styled(Box).attrs({ px: [1, 2, 3] })`
  min-width: 100vw;
  max-width: 100vw;
`

export const ViewportRowBody = styled(Box)`
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
`

export const ViewportRowBodyFlex = styled(Flex)`
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
`

export default ViewportRow
