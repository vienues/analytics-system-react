import React, { useState } from 'react'
import OpenfinWindowControls from '../openfin/OpenfinWindowControls'
import styled from 'styled-components/macro'
import PopoutIcon from './PopoutIcon'
import { DragHandle, Heading, PopoutButton, Title } from './StyledComponents'
import { ContainerServiceSubscribe, ContainerService } from 'platformService/ContainerService'
import { pxToRems } from 'utils'

type stockCard = 'company' | 'history' | 'news' | 'peers' | 'search' | 'stats' | 'stock'
type currenciesCard = 'abm'

interface IProps {
  style?: {
    [key: string]: any
  }
  cardType: stockCard | currenciesCard
  title: string | JSX.Element
  instrument: string
}

const DataContents: React.FunctionComponent<IProps> = (props) => {
  const [poppedOut, setPoppedOut] = useState(false)

  const closeHandler = () => {
    setPoppedOut(false)
  }

  const popoutClickHandler = async () => {
    setPoppedOut(true)
    ContainerService.OpenWindow(
      {
        url: `${window.location.protocol}//${window.location.host}/${props.cardType}/${props.instrument}`,
        name: props.cardType,
      },
      closeHandler,
    )
  }

  return (
    <ContainerServiceSubscribe>
      {(containerApi) => {
        const { app, win } = containerApi.state

        if (containerApi.agent !== 'desktop' || !app || !win) {
          return (
            <VanillaDataCard {...props.style}>
              <Heading>{props.title}</Heading>
              {props.children}
            </VanillaDataCard>
          )
        }

        const Wrapper = win.identity.name === app.identity.uuid ? VanillaDataCard : PopupDataCard
        const Header = win.identity.name === app.identity.uuid ? VanillaHeader : DataCardHeading

        return (
          poppedOut || (
            <Wrapper {...props.style}>
              <Header>
                <Title>{props.title}</Title>
                <DragHandle />
                {win.identity.name === app.identity.uuid ? (
                  <PopoutButton onClick={popoutClickHandler} style={{ height: '0px', justifySelf: 'end' }}>
                    <PopoutIcon width={0.8125} height={0.75} />
                  </PopoutButton>
                ) : (
                  <OpenfinWindowControls />
                )}
              </Header>
              <div style={{ padding: '1rem' }}>{props.children}</div>
            </Wrapper>
          )
        )
      }}
    </ContainerServiceSubscribe>
  )
}

const VanillaDataCard = styled.div`
  display: grid;
  grid-template-columns: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  padding: ${pxToRems(28)} ${pxToRems(32)};
`

const PopupDataCard = styled.div`
  display: grid;
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: ${({ theme }) => theme.primary.corePrimary};
  grid-template-columns: 100%;
`

const VanillaHeader = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto auto;
`

// use banner once circular dependency is resolved during refactoring
const DataCardHeading = styled.div`
  line-height: 1.25rem;
  padding: 0 0 0 1rem;
  display: grid;
  align-items: center;
  min-width: 100%;
  min-height: 3.5rem;
  background-color: ${({ theme }) => theme.primary.corePrimary};
  color: ${({ theme }) => theme.textColor};
  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  grid-template-columns: auto 1fr auto auto;
`

export default DataContents
