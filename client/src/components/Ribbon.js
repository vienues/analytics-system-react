import React from 'react'
import styled from 'styled-components'

import { ViewportFlex, gradients, Small } from 'styleguide'

const Ribbon = styled(ViewportFlex).attrs({ f: 0, color: 'primary50', column: true })`
  position: fixed;
  bottom: 0;

  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  line-height: 1.25rem;

  display: flex;
  align-items: center;

  min-width: 100vw;
  min-height: 3rem;
  background-image: linear-gradient(180deg, ${gradients.secondary.join(', ')});
`

export default props => (
  <Ribbon>
    <Small flex="1 100%" f={0}>
      US MARKET
    </Small>
    {props.children}
  </Ribbon>
)
