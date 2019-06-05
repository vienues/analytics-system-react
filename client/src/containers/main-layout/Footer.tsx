import * as React from 'react'
import { Banner } from '../../common/StyledComponents'
import { styled } from '../../rt-theme'
import { MarketsList } from '../index'

const Footer = () => (
  <FooterWrapper>
    <MarketsList />
  </FooterWrapper>
)

const FooterWrapper = styled(Banner)`
  border-top: 1px solid ${({ theme }) => theme.core.darkBackground};
  z-index: 1000;
`

export default Footer
