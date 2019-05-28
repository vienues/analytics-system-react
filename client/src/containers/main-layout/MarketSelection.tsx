import React, { useEffect, useState } from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import { styled } from '../../rt-theme'

const MarketSelection: React.FunctionComponent<RouteComponentProps & {}> = ({ history, location }) => {
  const [currentMarket, setCurrentMarket] = useState('')

  useEffect(() => {
    const [, market] = location.pathname.split('/')
    if (market) {
      setCurrentMarket(market)
    } else {
      setCurrentMarket('stock')
    }
  }, [location])

  const onMarketClick = (e: React.SyntheticEvent<HTMLLIElement>) => {
    const market = e.currentTarget.dataset.market
    history.push(`/${market}/`)
  }
  return (
    <LeftNav>
      <LeftNavItemFirst style={{ fontWeight: 500 }}>Markets</LeftNavItemFirst>
      <NavItem data-market="currency" active={currentMarket === 'currency'} style={{ cursor: 'not-allowed' }}>
        Currencies
      </NavItem>
      <NavItem data-market="stock" active={currentMarket === 'stock'} onClick={onMarketClick}>
        Stocks
      </NavItem>
      <NavItem data-market="index" active={currentMarket === 'index'} style={{ cursor: 'not-allowed' }}>
        Indicies
      </NavItem>
      <NavItem data-market="future" active={currentMarket === 'future'} style={{ cursor: 'not-allowed' }}>
        Futures
      </NavItem>
      <NavItem data-market="bond" active={currentMarket === 'bond'} style={{ cursor: 'not-allowed' }}>
        Bonds
      </NavItem>
      <NavItem data-market="crypto" active={currentMarket === 'crypto'} style={{ cursor: 'not-allowed' }}>
        Cryptocurrencies
      </NavItem>
    </LeftNav>
  )
}

const LeftNav = styled.ul`
  display: grid;
  justify-content: start;
  grid-gap: 1rem;
  grid-template-columns: repeat(7, auto);
  margin: 1rem;
`
const LiStyle = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  font-size: 14px;
`
const LeftNavItemFirst = styled(LiStyle)`
  list-style-type: none;
  font-size: 16px;
`

const NavItem = styled(LiStyle)<{ active: boolean }>`
  list-style-type: none;
  opacity: ${({ active }) => (active ? '1' : '0.52')};
  background: ${({ active, theme }) => (active ? theme.core.lightBackground : 'initial')};
  border-radius: 0.25rem;
  padding: 1rem 2.5rem;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

export default withRouter(MarketSelection)
