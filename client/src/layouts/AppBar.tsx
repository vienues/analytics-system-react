import React from 'react'
import { styled, ThemeName, useTheme } from '../rt-theme'

import Logo from './Logo'

const ThemeControl = () => {
  const { themeName, toggleTheme } = useTheme()
  return (
    <IconButton onClick={toggleTheme}>
      <i className={`fa${themeName === ThemeName.Light ? 'r' : 's'} fa-lightbulb`} />
    </IconButton>
  )
}

class AppBar extends React.Component {
  public onClick = () => window.open('https://weareadaptive.com/')

  public render() {
    const { children } = this.props
    return (
      <Body>
        <Logo size={1.75} onClick={this.onClick} />
        <Fill />
        <ThemeControl />
        {children == null ? null : (
          <React.Fragment>
            <Division props={true} />
            {children}
          </React.Fragment>
        )}
      </Body>
    )
  }
}

const Body = styled.div`
  width: 100%;
  max-width: 100%;

  min-height: 3.5rem;
  max-height: 3.5rem;

  padding: 0 1rem;

  display: flex;
  align-items: center;

  background-color: ${({ theme }: { theme: any }) => theme.core.lightBackground};
  color: ${({ theme }: { theme: any }) => theme.core.textColor};

  position: relative;
  z-index: 10;

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

const Division = styled.div`
  height: 100%;
  padding: 0 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    display: block;
    width: 0.125rem;
    height: 100%;
    margin-right: -0.125rem;
    background-color: ${({ props }: { props: any }) => props.theme.core.darkBackground};
  }
`
const Fill = styled.div`
  flex: 1;
  height: calc(3.5rem - 5px);
  margin-top: 5px;
  /**
    TODO 8/22 extract this extension of header, and the fill outside header layout
  */
  -webkit-app-region: drag;
  cursor: -webkit-grab;
`

export default AppBar
