import styled, { css } from 'styled-components'

import { colors } from '../../../common/src/index'
import { mapProps } from './mapProps'

const BASE = 16
const toUnit = v => `${(!v ? 0 : v < 2 ? 0.5 : v - 1) * BASE}px`

export const viewProps = mapProps({
  h: v => css`
    height: ${toUnit(v)};
  `,
  p: v => css`
    padding: ${toUnit(v)};
  `,
  pt: v => css`
    padding-top: ${toUnit(v)};
  `,
  px: v => css`
    padding-left: ${toUnit(v)};
    padding-right: ${toUnit(v)};
  `,
  py: v => css`
    padding-top: ${toUnit(v)};
    padding-bottom: ${toUnit(v)};
  `,
  radius: v => css`
    border-radius: ${toUnit(v)};
  `,
  borderColor: key =>
    colors[key] &&
    css`
      border-color: ${colors[key]};
    `,
  backgroundColor: key =>
    colors[key] &&
    css`
      background-color: ${colors[key]};
    `,
})

export const View = styled.View`
  ${viewProps};
`

export default View
