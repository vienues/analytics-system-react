import React from 'react'
import styled from 'styled-components'
import { LinearGradient } from 'expo'
import { gradients } from '@adaptive-insights/common'

const ApplicationBackground = styled(LinearGradient).attrs({
  colors: gradients.native,
  start: [0.3, 0.1],
})`
  height: 100%;
  width: 100%;
  padding: 64px 16px;
`

export default ApplicationBackground
