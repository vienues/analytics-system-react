import { ButtonLink } from 'common/StyledComponents'
import styled from 'styled-components/macro'
import { pxToRems } from 'utils'

export const PeersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const PeersLink = styled(ButtonLink)`
  color: ${({ theme }) => theme.primary.corePrimary4};
  min-width: ${pxToRems(43)};
  &:hover {
    color: ${({ theme }) => theme.primary.corePrimary2};
    background-color: ${({ theme }) => theme.secondary.coreSecondary4};
  }
`
