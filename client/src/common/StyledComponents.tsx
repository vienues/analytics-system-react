import styled, { css } from 'styled-components/macro'

import { default as dataCard } from './DataCard'
import { fonts } from 'rt-theme/fonts'
import { pxToRems } from 'utils'
export const DataCard = dataCard

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
  color: ${({ theme }) => theme.primary.corePrimary};
`
export const ToolTipChildRight = styled.div`
  width: 30px;
  font-size: 10px;
  color: ${({ theme }) => theme.primary.corePrimary};
`

export const DataContents = styled.div`
  display: grid;
  grid-gap: 1rem;
`

export const VerticalDataContents = styled(DataContents)`
  grid-auto-flow: column;
  justify-content: center;
`

export const Text = styled.span`
  color: ${({ theme }) => theme.textColorPrimary};
`

export const BoldText = styled(Text)`
  font-weight: 500;
`

export const LabeledData = styled.div`
  min-height: 1.5rem;
  border-bottom: 1px #54606d solid;
  display: grid;
  grid-template-columns: 1fr auto;
`

export const Title = styled.h1`
  margin-top: 0rem;
  font-size: ${pxToRems(16)};
  font-weight: 300;
  font-family: ${fonts.secondaryFontFamily};
  color: ${({ theme }) => theme.textColorSecondary};
`

export const Heading = styled(Title)`
  margin-bottom: ${pxToRems(15)};
`

export const Subheading = styled.h2`
  font-size: ${pxToRems(13)};
  font-weight: 500;
`

export const Caption = styled.span`
  color: ${({ theme }) => theme.secondary.coreSecondary5};
  opacity: 0.59;
  display: block;
  line-height: 1rem;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  font-size: 0.75rem;
`

export const Link = styled.a`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`

export const ButtonLink = styled.a`
  cursor: pointer;
  font-size: ${pxToRems(11)};
  font-weight: 500;
  border: 2px solid ${({ theme }) => theme.primary.corePrimary4};
  border-radius: ${pxToRems(43)};
  padding: ${pxToRems(2)} ${pxToRems(4)};
  margin: ${pxToRems(2)};
  text-align: center;
`

export const StrongLabel = styled(Text)`
  font-weight: 600;
`

export const OpaqueLabel = styled(Text)`
  opacity: 0.59;
`

export const FieldLabel = styled(Text)``

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

  transition: background-color ${({ theme }) => theme.motion.duration}ms ${({ theme }) => theme.motion.easing};

  &:hover {
    background-color: ${({ theme }) => theme.button.secondary.active.backgroundColor};
    color: ${({ theme }) => theme.button.secondary.textColor};
  }
`

export const PopoutButton = styled('button')`
  .svg-icon {
    stroke: ${({ theme }) => theme.textColorPrimary};
    fill: ${({ theme }) => theme.textColorPrimary};
  }
`

export const DragHandle = styled.div`
  -webkit-app-region: drag;
  height: 100%;
`

const ContentBase = styled.div`
  display: grid;
  grid-gap: 0.5em;
`

export const MainContent = styled(ContentBase)`
  grid-template-columns: 3fr 1fr;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`
export const MainInnerContent = styled(ContentBase)`
  align-content: start;
`

const SearchBoxLanding = css`
  grid-area: unset;
  grid-column: 1/4;
  grid-row: 1/3;
  margin: 0 ${pxToRems(22)};
`

export const MainSearchContent = styled.div<{ hasNoSearch: boolean }>`
  grid-area: Search;
  align-self: center;
  font-size: 2rem;
  line-height: 2rem;
  grid-template-columns: 1fr;
  grid-auto-flow: column;
  margin: ${pxToRems(32)} ${pxToRems(22)} ${pxToRems(12)};
  position: relative;
  border-bottom: solid 2px ${({ theme }) => theme.primary.corePrimary3};
  @media (max-width: 900px) {
    font-size: 1rem;
    line-height: 1rem;
  }
  @media (max-width: 500px) {
    grid-auto-flow: row;
  }
  ${({ hasNoSearch }) => hasNoSearch && SearchBoxLanding}
`

export const WrapperContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr auto;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'Search Search News'
    'Main Main News'
    'Main Main News';
  overflow: auto;
`

export const SearchGridArea = styled.div`
  grid-area: Search;
  display: grid;
  grid-template-columns: 1fr auto;
  margin-bottom: ${pxToRems(10)};
`

export const NewsGridArea = styled.div`
  grid-area: News;
  width: ${pxToRems(350)};
  padding: 0 ${pxToRems(16)};
  background-color: ${({ theme }) => theme.primary.corePrimary2};
  height: 100vh;
  overflow-y: auto;
`

export const MainGridArea = styled.div`
  grid-area: Main;
  overflow-y: auto;
`

export const MainLayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  height: 100%;
`

export const ScrollableArea = styled.div`
  flex-direction: column;
  overflow-y: auto;
  flex: 1;
  padding: 1rem;
  padding-bottom: 2rem;
`

export const FooterStatsWrapper = styled.div`
  display: grid;
  grid-area: Main;
  grid-template-rows: 1fr auto;
`
