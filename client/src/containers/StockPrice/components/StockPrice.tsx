import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import { Label } from '../../../common/StyledComponents'
import { colors } from '../../../rt-theme'

export interface IStockPriceData {
  change: number
  changePercent: number
  latestPrice: number
}

interface IStockPriceProps {
  symbol?: string
  fontSize?: number
  stockPrice: IStockPriceData
}

const StockPrice: React.FunctionComponent<IStockPriceProps> = props => {
  const { change, changePercent, latestPrice } = props.stockPrice
  const [Icon, color] =
    (change || 0) < 0 ? [faArrowDown, colors.accents.bad.base] : [faArrowUp, colors.accents.good.base]

  const fixedFormat = (e: number) => {
    return e < 100 ? e.toFixed(2) : e.toFixed(0)
  }

  return (
    <Layout style={{ fontSize: props.fontSize }}>
      {props.symbol ? <div style={{ gridArea: 'symbol' }}>{props.symbol}</div> : <></>}
      <div style={{ gridArea: 'latest-price' }}>$ {latestPrice}</div>
      <div style={{ color, gridArea: 'icon' }}>
        <FontAwesomeIcon icon={Icon} />
      </div>
      <div style={{ color, gridArea: 'change' }}>
        <Label>{fixedFormat(change)}</Label>
      </div>
      <div style={{ color, gridArea: 'change-percent' }}>
        {' '}
        <Label>{fixedFormat(changePercent * 100)}%</Label>
      </div>
    </Layout>
  )
}

const Layout = styled.div`
  display: grid;
  grid-template-columns: 3fr 4fr 1fr 2fr 2fr;
  grid-gap:0.5em;
  grid-template-areas:
    "symbol latest-price icon change change-percent";
  & > div {
    font-size: ${props => {
      if (props && props.style) {
        return props.style.fontSize || 1
      }
      return 1
    }}rem; }
    line-height: ${props => {
      if (props && props.style) {
        return props.style.fontSize || 1
      }
      return 1
    }}rem; }
  
`

export default StockPrice
