import React from 'react'
import { Flex, Button, Box } from 'rebass'
import { withHandlers } from 'recompose'
import { Root, Text } from 'styleguide'
import styled from 'styled-components'
import logoSVG from '../../assets/logo.svg'
import { CloseIcon, MinimizeIcon } from '../../assets/icons'

const PanelHeader = styled(Flex)`
  align-items: center;
  background-color: ${props => props.theme.colors.teal};
  border-radius: 4px 4px 0 0;
  padding-left: 1rem;
  padding-right: 0.5rem;
  height: 2rem;
  justify-content: space-between;
  -webkit-app-region: drag;
`

const Logo = styled(Box)`
  display: block;
  min-height: 1rem;
  max-height: 1rem;
  min-width: 5rem;
  background-size: contain;
  background-position: center left;
  background-color: transparent;
  background-image: url(${logoSVG});
`

const PanelButton = styled(Button)`
  background: transparent;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 0.2rem;
`

const DesktopPanel = ({ heading, children, close, minimize, id }) => (
  <Root column w={1} id={'bg'}>
    <PanelHeader>
      <Logo />
      <Text color="offwhite">{`${heading}`}</Text>
      <Flex>
        <PanelButton onClick={minimize}>
          <MinimizeIcon width={'1rem'} height={'1rem'} />
        </PanelButton>
        <PanelButton onClick={close}>
          <CloseIcon width={'1rem'} height={'1rem'} />
        </PanelButton>
      </Flex>
    </PanelHeader>
    <Box flex={1} px={2} pb={2}>
      {children}
    </Box>
  </Root>
)

export default withHandlers({
  close: props => event => {
    window.fin.desktop.Application.getCurrent().close()
  },
  minimize: props => event => {
    window.fin.desktop.Window.getCurrent().minimize()
  },
})(DesktopPanel)
