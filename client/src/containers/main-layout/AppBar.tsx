import { ContainerService } from 'platformService/ContainerService'
import React, { useContext } from 'react'
import LogoWithText from '../../common/LogoWithText'
import OpenfinWindowControls from '../../openfin/OpenfinWindowControls'
import { useTheme, styled } from '../../rt-theme'
import { pxToRems } from 'utils'
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
