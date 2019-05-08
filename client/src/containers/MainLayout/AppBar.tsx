import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled, { ThemeProps } from 'styled-components'
import Logo from '../../common/Logo'
import { Banner, Link, SwitchThemeButton } from '../../common/StyledComponents'
import { Theme, ThemeName, useTheme } from '../../rt-theme'

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

const AppBar: React.FunctionComponent = () => {
  const onClick = () => window.open('https://weareadaptive.com/')

  return (
    <AppWrapper>
      <Link>
        <Logo size={1.75} onClick={onClick} />
      </Link>
      <ThemeControl />
    </AppWrapper>
  )
}

const AppWrapper = styled(Banner)`
  grid-template-columns: 1fr auto;
  box-shadow: 0 0.125rem 0 ${({ theme }: ThemeProps<Theme>) => theme.core.darkBackground};
`

export default AppBar
