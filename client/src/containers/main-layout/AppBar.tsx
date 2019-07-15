import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Logo from '../../common/Logo'
import { Banner, DragHandle, Link, SwitchThemeButton } from '../../common/StyledComponents'
import { OpenfinApiSubscribe, OpenfinContainer } from '../../openfin/OpenfinService'
import OpenfinWindowControls from '../../openfin/OpenfinWindowControls'
import { styled, ThemeName, useTheme } from '../../rt-theme'

const ThemeControl = () => {
  const { themeName, toggleTheme } = useTheme()
  return (
    <SwitchThemeButton style={{ marginRight: '1rem' }} onClick={toggleTheme}>
      <FontAwesomeIcon
        title="Toggle theme"
        icon={[`fa${themeName === ThemeName.Light ? 'r' : 's'}`, 'lightbulb'] as IconProp}
      />
    </SwitchThemeButton>
  )
}

const AppBar = () => (
  <OpenfinApiSubscribe>
    {(openfinApi: OpenfinContainer) => {
      return (
        <AppWrapper>
          <Link target="_blank" href="https://weareadaptive.com/">
            <Logo size={1.75} />
          </Link>
          <DragHandle />
          <ThemeControl />
          {openfinApi.state.openfin ? <OpenfinWindowControls /> : <></>}
        </AppWrapper>
      )
    }}
  </OpenfinApiSubscribe>
)

const AppWrapper = styled(Banner)`
  grid-template-columns: auto 1fr auto auto;
`

export default AppBar
