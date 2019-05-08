import * as React from 'react'
import styled, { ThemeProps } from 'styled-components'
import { Banner } from '../../common/StyledComponents'
import { Theme } from '../../rt-theme'
import { MarketsList } from '../index'

const Footer = () => (
  <FooterWrapper>
    <MarketsList />
  </FooterWrapper>
)

const FooterWrapper = styled(Banner)`
  border-top: 1px solid ${({ theme }: ThemeProps<Theme>) => theme.core.darkBackground};
`

export default Footer
