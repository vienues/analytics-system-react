import { withProps } from 'recompose'
import * as Rebass from 'rebass'
import styled, { css } from 'styled-components'
import { mapProps } from './mapProps'

export { ViewportFlex } from './ViewportRow'

export const Background = styled(Rebass.Box)`
  color: ${props => props.theme.colors.primary50a};
  background-image: linear-gradient(323deg, ${props => props.theme.gradients.primary});
`

export const Root = Background.withComponent(Rebass.Flex).extend`
  height: 100%;
  width: 100%;
`

export const Divider = styled(Rebass.Border).attrs({
  my: 2,
  color: props => (props.alt ? 'offwhite50' : 'accent'),
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

export const Text = styled(Rebass.Text).attrs({ is: 'div' })`
  ${textProps};
`
export const Heading = styled(Rebass.Heading)`
  ${textProps};
`
export const Lead = styled(Rebass.Lead)`
  ${textProps};
  color: ${props => props.theme.colors.offwhite};
`
export const Small = styled(Rebass.Small)`
  ${textProps};
  color: ${props => props.theme.colors[props.color || 'white']};
`

export const BlockLink = styled(Text).attrs({ is: 'a', f: 0 })`
  ${textProps};
  display: block;
`

export const HyperLinkedLead = Small.extend`
  &:hover {
    color: ${props => props.theme.colors.gold};
  }
`
export const HyperLinkedBlockLink = BlockLink.extend`
  &:hover {
    color: ${props => props.theme.colors.gold};
  }
`
