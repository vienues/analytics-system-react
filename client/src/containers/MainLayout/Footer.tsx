import * as React from 'react'
import styled, { ThemeProps } from 'styled-components'
import { Theme } from '../../rt-theme'
import { MarketsList } from '../index'

const FooterWrapper = styled.div`
  line-height: 1.25rem;
  padding: 0 1rem;
  display: grid;
  align-items: center;
  min-width: 100%;
  min-height: 3.5rem;
  background-color: ${({ theme }: ThemeProps<Theme>) => theme.core.lightBackground};
  border-top: 1px solid ${({ theme }: ThemeProps<Theme>) => theme.core.darkBackground};
`

export const Footer = () => (
  <FooterWrapper>
    <MarketsList />
  </FooterWrapper>
)

export default Footer
