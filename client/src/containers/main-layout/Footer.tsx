import * as React from 'react'
import styled from 'styled-components/macro'
import { MarketsList } from '../index'
import { pxToRems } from 'utils'

export const FooterMarket = styled.div``

const FooterWrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.primary.corePrimary3};
  margin: 0 ${pxToRems(22)};
  padding-top: ${pxToRems(6)};
`

const Footer = () => (
  <FooterWrapper>
    <MarketsList />
  </FooterWrapper>
)

export default Footer
