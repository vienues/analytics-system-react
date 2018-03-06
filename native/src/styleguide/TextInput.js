import styled, { css } from 'styled-components'

import { colors } from '../../../common/src/index'

import { textProps } from './Text'
import { viewProps } from './View'

export const TextInput = styled.TextInput`
  font-family: verta-regular;
  color: ${colors.offwhite};
  ${textProps};
  ${viewProps};
`
