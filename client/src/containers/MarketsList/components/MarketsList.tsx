import React from 'react'
import styled from 'styled-components'

const MarketList: React.StatelessComponent<{}> = props => <Layout>{props.children}</Layout>

const Layout = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 0.5rem;
  justify-content: start;
`

export default MarketList
