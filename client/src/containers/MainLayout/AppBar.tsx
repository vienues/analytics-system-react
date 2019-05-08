import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import Logo from '../../common/Logo'
import { Banner, Link, SwitchThemeButton } from '../../common/StyledComponents'
import { ThemeName, useTheme } from '../../rt-theme'

const ThemeControl = () => {
  const { themeName, toggleTheme } = useTheme()
  return (
    <SwitchThemeButton onClick={toggleTheme}>
      <FontAwesomeIcon
        title="Toggle theme"
        icon={[`fa${themeName === ThemeName.Light ? 'r' : 's'}`, 'lightbulb'] as IconProp}
      />
    </SwitchThemeButton>
  )
}

const AppBar: React.FunctionComponent = () => (
  <AppWrapper>
    <Link target="_blank" href="https://weareadaptive.com/">
      <Logo size={1.75} />
    </Link>
    <ThemeControl />
  </AppWrapper>
)

const AppWrapper = styled(Banner)`
  grid-template-columns: 1fr auto;
`

export default AppBar
