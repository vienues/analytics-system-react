import React from 'react'
import * as Rebass from 'rebass'
import { withProps } from 'recompose'
import styled, { css } from 'styled-components'

// @ts-ignore
import * as AdaptiveCommon from '@adaptive-insights/common'

export { ViewportFlex } from './ViewportRow'

export const Background = styled(Rebass.Box)`
  color: ${({ theme }) => theme.core.textColor};
  background-image: linear-gradient(323deg, ${({ theme }) => theme.core.darkBackground});
`

export const Root = (Background.withComponent(Rebass.Flex) as any).extend`
  height: 100%;
  width: 100%;
`

export const Divider = styled((Rebass as any).Border).attrs({
  borderWidth: 2,
  color: (props: any) => (props.soft ? 'offwhite50' : 'accent'),
  my: 2,
  top: true,
})`
  flex: 1 100%;
`

export const Gutter = withProps({ p: [1, 2] })(Rebass.Box as any)

export const textProps = AdaptiveCommon.mapProps({
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
  lineHeight: (lineHeight: any) =>
    css`
      line-height: ${lineHeight};
    `,
  weight: {
    bold: css`
      font-weight: 600;
    `,
    default: (weight: any) => css`
      font-weight: ${weight};
    `,
    light: css`
      font-weight: 200;
    `,
    regular: css`
      font-weight: 300;
    `,
  },
})

export const Text = styled(Rebass.Text).attrs({ is: 'div' })`
  ${textProps};
`
export const Heading = styled(Rebass.Heading)`
  ${textProps};
`
export const Lead = styled((Rebass as any).Lead)`
  ${textProps};
  color: ${props => props.theme.colors.offwhite};
`
export const Small = styled((Rebass as any).Small)`
  ${textProps};
  color: ${props => props.theme.colors[props.color || 'white']};
`
export const Label = styled(Rebass.Text)`
  ${textProps};
  opacity: 0.59;
  font-size: smaller;
`
export const Caption = styled((Rebass as any).Small)`
  ${textProps};
  color: ${props => props.theme.colors[props.color || 'white']};
  opacity: 0.59;
  display: block;
  line-height: 1rem;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
`

export const BlockLink = styled(Text).attrs({ is: 'a', f: 0 })`
  ${textProps};
  display: block;
`

export const HyperLinkedLead = styled((Rebass as any).Small)`
  ${textProps};
  color: ${props => props.theme.colors[props.color || 'white']};
  &:hover {
    color: ${(props: any) => props.theme.colors.gold};
  }
`
export const HyperLinkedBlockLink = styled(Text).attrs({ is: 'a', f: 0 })`
  ${textProps};
  display: block;
  &:hover {
    color: ${(props: any) => props.theme.colors.gold};
  }
`

export const SuperText = styled(Small)`
  line-height: 1em;

  &:after,
  &:before {
    display: inline-block;
    vertical-align: super;
    font-size: 1rem;
    line-height: 1;

    height: 0;
    max-height: 0;
  }
`

export const Currency = styled(SuperText)`
  &:before {
    content: '$';
    font-size: 0.5rem;
    padding-right: 0.25rem;
  }
`

export const Percent = styled(SuperText)`
  &:after {
    content: '%';
    font-size: 0.5rem;
    padding-left: 0.125rem;
  }
`

const VerticalRule = ({ className }: any) => (
  <svg className={className} width="8" height="12" viewBox="0 0 8 20" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4,4 L4,24"
      stroke="#fff"
      strokeWidth="2"
      fill="none"
      fillRule="evenodd"
      opacity=".5"
      strokeLinecap="square"
    />
  </svg>
)

export const VerticalRuleStyled = styled(VerticalRule)`
  > path {
    stroke: ${({ color, theme }: any) => theme.colors[color]};
  }
`

export const AnalyticsLineChartStyle = styled.div`
  width: 100%;
  height: 100%;
  min-height: 35px; /* Required to avoid JS errors when resizing the height of the browser small enough such 
                        that the height of the chart is computed as negative values. -D.S. ARTP-394 */
  overflow-y: hidden;
  .recharts-cartesian-axis-ticks {
    color: #ffffff;
    width: 52px;
    height: 12px;
    opacity: 1;
    font-size: 10px;
  }
`

export const ToolTipStyle = styled.div`
  background-color: #14161c;
  width: 140px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ToolTipChildLeft = styled.div`
  width: 70px;
  opacity: 0.6;
  font-size: 10px;
  color: ${({ theme }) => theme.template.white.dark};
`
export const ToolTipChildRight = styled.div`
  width: 30px;
  font-size: 10px;
  color: ${({ theme }) => theme.template.white.normal};
`
export const Large = styled.div`
  font-size: 2rem;
  font-weight: 300;
  line-height: 2rem;
  color: ${props => props.theme.colors[props.color || 'white']};
`
