import { ButtonLink } from 'common/StyledComponents'
import styled from 'styled-components/macro'
import { pxToRems } from 'utils'

export const PeersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const PeersLink = styled(ButtonLink)`
  color: ${({ theme }) => theme.secondary.coreSecondary4};
  min-width: ${pxToRems(43)};
  &:hover {
    background-color: ${({ theme }) => theme.primary.corePrimary4};
    color: ${({ theme }) => theme.secondary.coreSecondary2};
  }
`
