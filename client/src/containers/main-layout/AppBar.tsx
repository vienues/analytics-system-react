import { ContainerService } from 'platformService/ContainerService'
import { default as React, useContext } from 'react'
import styled from 'styled-components/macro'
import { pxToRems } from 'utils'
import LogoWithText from '../../common/LogoWithText'
import OpenfinWindowControls from '../../openfin/OpenfinWindowControls'
import { useTheme } from '../../rt-theme'
import { SearchContext } from '../search/SearchContext'

const Sidebar = styled.div<{ hasPreviousSearch: boolean }>`
  display: flex;
  align-items: ${({ hasPreviousSearch }) => (hasPreviousSearch ? 'flex-start' : 'center')};
  justify-content: center;
  background: ${({ theme }) => theme.secondary.coreSecondary2};
  width: ${pxToRems(129)};
`

const LogoWrapper = styled.div`
  margin: ${pxToRems(32)} 0;
`

const AppBar = () => {
  const { toggleTheme } = useTheme()
  const { previousSearch } = useContext(SearchContext)

  return (
    <Sidebar hasPreviousSearch={previousSearch ?? false}>
      <LogoWrapper onDoubleClick={toggleTheme}>
        <LogoWithText size={5.5} />
      </LogoWrapper>
      {ContainerService.agent === 'desktop' && <OpenfinWindowControls />}
    </Sidebar>
  )
}

export default AppBar
