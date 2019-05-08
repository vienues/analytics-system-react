import styled, { ThemeProps } from 'styled-components'
import { Theme } from '../rt-theme'

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

export const Banner = styled.div`
  line-height: 1.25rem;
  padding: 0 1rem;
  display: grid;
  align-items: center;
  min-width: 100%;
  min-height: 3.5rem;
  background-color: ${({ theme }: ThemeProps<Theme>) => theme.core.lightBackground};
  color: ${({ theme }: ThemeProps<Theme>) => theme.core.textColor};
  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`

export const DataCard = styled.div`
  display: grid;
  border-radius: 0.25rem;
  background-color: ${({ theme }: ThemeProps<Theme>) => theme.core.lightBackground};
  overflow-x: hidden;
  overflow-y: auto;
  padding: 1rem;
  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`

export const DataContents = styled.div`
  display: grid;
  grid-gap: 1rem;
`

export const VerticalDataContents = styled(DataContents)`
  grid-auto-flow: column;
  justify-content: start;
`

export const Text = styled.span``

export const LabeledData = styled.div`
  min-height: 1.5rem;
  border-bottom: 1px ${({ theme }) => theme.core.textColor} solid;
  display: grid;
  grid-template-columns: 1fr auto;
`

export const Heading = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: 400;
`

export const Subheading = styled.h2`
  font-size: 1.25rem;
  font-weight: 400;
`

export const Caption = styled.span`
  color: ${props => props.theme.colors[props.color || 'white']};
  opacity: 0.59;
  display: block;
  line-height: 1rem;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  font-size: 0.75rem;
  font-weight: 300;
`

export const Link = styled.a`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`

export const FieldLabel = styled(Text)`
  opacity: 0.59;
`

export const SwitchThemeButton = styled.button`
  width: 2rem;
  height: 2rem;
  font-size: 1rem;
  line-height: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  cursor: pointer;

  transition: background-color ${({ theme }: ThemeProps<Theme>) => theme.motion.duration}ms
    ${({ theme }: ThemeProps<Theme>) => theme.motion.easing};

  &:hover {
    background-color: ${({ theme }: ThemeProps<Theme>) => theme.button.secondary.active.backgroundColor};
    color: ${({ theme }: ThemeProps<Theme>) => theme.button.secondary.textColor};
  }
`
