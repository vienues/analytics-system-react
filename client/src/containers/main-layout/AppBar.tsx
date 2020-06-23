import { ContainerService } from 'platformService/ContainerService'
import React from 'react'
import LogoWithText from '../../common/LogoWithText'
import OpenfinWindowControls from '../../openfin/OpenfinWindowControls'
import { useTheme, styled } from '../../rt-theme'
import { pxToRems } from 'utils'

const Sidebar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.primary.corePrimary2};
  width: ${pxToRems(129)};
`

const AppBar = () => {
  const { toggleTheme } = useTheme()

  return (
    <Sidebar>
      <div onDoubleClick={toggleTheme}>
        <LogoWithText size={6} />
      </div>
      {ContainerService.agent === 'desktop' && <OpenfinWindowControls />}
    </Sidebar>
  )
}

export default AppBar
