import styled, { css } from 'styled-components'

import { mapProps } from './mapProps'
import { colors } from '../../../common/src/index'

const FONT_FAMILY = 'verta'

export const textProps = mapProps({
  color: colors,
  face: (value, key, props) => css`
    font-family: ${props.family || FONT_FAMILY}-${value};
  `,
})

export const Text = styled.Text`
  font-family: verta-regular;
  color: ${colors.offwhite};
  ${textProps};
`

export default Text
