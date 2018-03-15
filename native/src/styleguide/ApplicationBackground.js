import React from 'react'
import styled from 'styled-components'
import { LinearGradient } from 'expo'

const ApplicationBackground = styled(LinearGradient).attrs({
  colors: props => props.theme.gradients.native,
  start: [0.3, 0.1],
})`
  height: 100%;
  width: 100%;
  padding: 64px 16px;
`

export default ApplicationBackground
