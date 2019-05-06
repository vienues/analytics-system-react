import styled from 'styled-components'

// @ts-ignore
import * as AdaptiveCommon from '@adaptive-insights/common'

export const Text = styled.div`
  font-weight: 300;
`
export const Small = styled(Text)`
  color: ${props => props.theme.colors[props.color || 'white']};
`
export const Label = styled(Text)`
  opacity: 0.59;
  font-size: smaller;
`
export const Caption = styled.span`
  color: ${props => props.theme.colors[props.color || 'white']};
  opacity: 0.59;
  display: block;
  line-height: 1rem;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  font-size: 0.75rem;
`

export const BlockLink = styled(Text).attrs({ is: 'a', f: 0 })`
  display: block;
`

export const HyperLinkedLead = styled.span`
  color: ${props => props.theme.colors[props.color || 'white']};
  &:hover {
    color: ${(props: any) => props.theme.colors.gold};
  }
  font-weight: 300;
`
export const HyperLinkedBlockLink = styled(Text).attrs({ is: 'a', f: 0 })`
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
const bgColor = '#444c5f'
export const VerticalSeperator = styled.div`
  height:90%;
  border: solid 1px ${bgColor}
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  opacity: 0.85;
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

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`

export const Title = styled.div`
  margin-bottom: 1rem;
  height: 18px;
  font-size: 15px;
  font-weight: normal;
`

/** New for rt-theme */
export const DataCard = styled.div`
  display: grid
  border-radius: 0.25rem;
  background-color: ${({ theme }: any) => theme.core.lightBackground};
  overflow-x: hidden;
  overflow-y: auto;
  padding: 1rem;
`
