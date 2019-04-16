import React from 'react'
import { Flex } from 'rebass'
import styled from 'styled-components'

import { Small } from '../styleguide'

const RibbonBG = styled(Flex).attrs({ f: 0, column: true, px: 2 })`
  line-height: 1.25rem;
  justify-content: center;
  min-width: 100%;
  width: 100%;
  min-height: 3.4rem;
  background-color: ${({ theme }: { theme: any }) => theme.core.lightBackground};
`

const Ribbon = (props: any) => (
  <RibbonBG>
    <Small flex="1 100%" f={0}>
      US MARKET
    </Small>
    {props.children}
  </RibbonBG>
)

export default Ribbon
