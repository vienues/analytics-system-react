import * as React from 'react'
import { Banner } from '../../common/StyledComponents'
import styled from 'styled-components/macro'
import { MarketsList } from '../index'

const Footer = () => (
  <FooterWrapper>
    <MarketsList />
  </FooterWrapper>
)

const FooterWrapper = styled(Banner)`
  border-top: 1px solid ${({ theme }) => theme.primary.corePrimary};
  padding: 1.75rem 2rem;
  height: 200px;
`

export default Footer
