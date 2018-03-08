import React from 'react'
import styled from 'styled-components'

import { gradients, Small } from 'styleguide'
import { Flex } from 'rebass'

const RibbonBG = styled(Flex).attrs({ f: 0, column: true, px: 2 })`
  line-height: 1.25rem;
  justify-content: center;
  min-width: 100%;
  width: 100%;
  min-height: 3.4rem;
  background-image: linear-gradient(to left, #00265d, #00204f);
`
const Ribbon = props => (
  <RibbonBG>
    <Small flex="1 100%" f={0}>
      US MARKET
    </Small>
    {props.children}
  </RibbonBG>
)

export default Ribbon
