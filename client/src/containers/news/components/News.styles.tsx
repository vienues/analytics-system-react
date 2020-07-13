import { SidebarDataCard } from 'common/DataCard'
import styled from 'styled-components/macro'
import { mediaQuery } from 'rt-theme/mediaQueries'

export const NewsCard = styled(SidebarDataCard)`
  border-top: ${({ theme }) => `1px solid ${theme.secondary.coreSecondary4}`};
  @media ${mediaQuery.tabletL} {
    grid-area: 1/2;
    border-top: none;
  }
  @media ${mediaQuery.mobile} {
    border-top: ${({ theme }) => `1px solid ${theme.secondary.coreSecondary4}`};
    grid-area: 2;
  }
`
