import styled from 'styled-components/macro'
import { pxToRems } from 'utils'

export const MainBanner = styled.div<{ isHidden: boolean }>`
  display: ${({ isHidden }) => (isHidden ? 'none' : 'grid')};
  grid-row: 1;
  grid-column: 1 / -1;
  height: ${pxToRems(56)};
  background-color: ${({ theme }) => theme.primary.corePrimary1};
  color: ${({ theme }) => theme.secondary.coreSecondary};
  align-items: center;
  justify-content: center;
  grid-auto-flow: column;
`

export const CrossButton = styled.div`
  width: 24px;
  height: 24px;
  svg path:last-child {
    fill: ${({ theme }) => theme.secondary.coreSecondary};
  }
  &:hover {
    cursor: pointer;
  }
`

export const BannerText = styled.p`
  font-size: ${pxToRems(13)};
  font-weight: 500;
`

export const InstallButton = styled.button`
  background-color: ${({ theme }) => theme.accents.accentPrimary};
  color: #ffffff;
  font-weight: 500;
  padding: 8px 14px;
  margin: 0 10px;
  border-radius: ${pxToRems(43)};
  font-size: ${pxToRems(11)};
  text-transform: uppercase;
  &:hover {
    background-color: ${({ theme }) => theme.accents.accentPrimary2};
  }
`
