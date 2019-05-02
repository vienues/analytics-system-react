import * as React from 'react'
import styled from 'styled-components'
import { MarketsList } from '../../containers'

const FooterWrapper = styled.div`
  line-height: 1.25rem;
  justify-content: center;
  min-width: 100%;
  width: 100%;
  min-height: 3.4rem;
  background-color: ${({ theme }: { theme: any }) => theme.core.lightBackground};
  border-top: 1px solid ${({ theme }: { theme: any }) => theme.core.darkBackground};
`

export const Footer = () => (
  <FooterWrapper>
    <div>US Markets</div>
    <MarketsList />
  </FooterWrapper>
)

export default Footer
