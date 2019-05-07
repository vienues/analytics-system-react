import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { styled, ThemeName, useTheme } from '../../rt-theme'

import Logo from '../../common/Logo'

import { Link } from '../../common/StyledComponents'

const ThemeControl = () => {
  const { themeName, toggleTheme } = useTheme()
  return (
    <IconButton onClick={toggleTheme}>
      <FontAwesomeIcon icon={[`fa${themeName === ThemeName.Light ? 'r' : 's'}`, 'lightbulb'] as IconProp} />
    </IconButton>
  )
}

const AppBar: React.FunctionComponent = () => {
  const onClick = () => window.open('https://weareadaptive.com/')

  return (
    <Body>
      <div>
        <Link>
          <Logo size={1.75} onClick={onClick} />
        </Link>
      </div>
      <ThemeControl />
    </Body>
  )
}

const Body = styled.div`
  height: 3.5rem;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr auto;
  align-content: center;
  background-color: ${({ theme }: { theme: any }) => theme.core.lightBackground};
  color: ${({ theme }: { theme: any }) => theme.core.textColor};
  box-shadow: 0 0.125rem 0 ${({ theme }: { theme: any }) => theme.core.darkBackground};
`

const IconButton = styled.button`
  width: 2rem;
  height: 2rem;
  font-size: 1rem;
  line-height: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  cursor: pointer;

  transition: background-color ${({ theme }: { theme: any }) => theme.motion.duration}ms
    ${({ theme }: { theme: any }) => theme.motion.easing};

  &:hover {
    background-color: ${({ theme }: { theme: any }) => theme.button.secondary.active.backgroundColor};
    color: ${({ theme }: { theme: any }) => theme.button.secondary.textColor};
  }
`

export default AppBar
