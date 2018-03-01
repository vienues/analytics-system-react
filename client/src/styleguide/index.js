import { withProps } from 'recompose'
import * as Rebass from 'rebass'
import styled, { css } from 'styled-components'
import mapProps from './map-props'

export { colors, gradients } from './colors'

export { ViewportRow, ViewportFlex, ViewportRowPadding, ViewportRowBody } from './ViewportRow'

export const Background = styled(Rebass.Box)`
  color: ${props => props.theme.colors.primary50a};
  background-color: ${props => props.theme.gradients.primary[0]};
  background-image: linear-gradient(135deg, ${props => props.theme.gradients.primary.join(', ')} 120%);
`

export const Root = Background.withComponent(Rebass.Flex).extend`
  height: 100%;
  width: 100%;
  display: flex;
`

export const Divider = styled(Rebass.Border).attrs({
  my: 2,
  color: props => props.color || 'accent',
  borderWidth: 2,
  top: true,
})`
  flex: 1 100%;
`

export const Gutter = withProps({ p: [1, 2] })(Rebass.Box)

export const textProps = mapProps({
  weight: {
    light: css`
      font-weight: 200;
    `,
    regular: css`
      font-weight: 300;
    `,
    bold: css`
      font-weight: 600;
    `,
    default: weight => css`
      font-weight: ${weight};
    `,
  },
  lineHeight: lineHeight =>
    css`
      line-height: ${lineHeight};
    `,
  caps: css`
    text-transform: uppercase;
    letter-spacing: 0.0625rem;
  `,
  display: {
    inline: css`
      display: inline;
    `,
  },
  fontStyle: {
    italic: css`
      font-style: italic;
    `,
  },
})

const hoverStyle = color => `  
  &:hover {
    color: #${color}
  }
`

export const Text = styled(Rebass.Text).attrs({ is: 'div' })`
  ${textProps};
`
export const Heading = styled(Rebass.Heading)`
  ${textProps};
`
export const Lead = styled(Rebass.Lead)`
  ${textProps};
  ${props => props.hover && hoverStyle(props.hover)};
`
export const Small = styled(Rebass.Small)`
  color: ${props => props.theme.colors.white} ${textProps};
`

export const BlockLink = styled(Text).attrs({ is: 'a', f: 0 })`
  ${textProps};
  ${props => props.hover && hoverStyle(props.hover)};
  display: block;
`
