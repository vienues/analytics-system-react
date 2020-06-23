import { ContainerService } from 'platformService/ContainerService'
import { default as React, useContext } from 'react'
import styled from 'styled-components/macro'
import { pxToRems } from 'utils'
import LogoWithText from '../../common/LogoWithText'
import OpenfinWindowControls from '../../openfin/OpenfinWindowControls'
import { useTheme } from '../../rt-theme'
import { SearchContext } from '../search/SearchContext'

const Sidebar = styled.div<{ hasNoSearch: boolean }>`
  display: flex;
  align-items: ${({ hasNoSearch }) => (hasNoSearch ? 'center' : 'flex-start')};
  justify-content: center;
  background: ${({ theme }) => theme.primary.corePrimary2};
  width: ${pxToRems(129)};
`

const AppBar = () => {
  const { toggleTheme } = useTheme()
  const { currentSymbol } = useContext(SearchContext)

  return (
    <Sidebar hasNoSearch={!currentSymbol}>
      <div onDoubleClick={toggleTheme}>
        <LogoWithText size={6} />
      </div>
      {ContainerService.agent === 'desktop' && <OpenfinWindowControls />}
    </Sidebar>
  )
}

export default AppBar
