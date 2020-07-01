import { BoldText, VerticalDataContents } from 'common/StyledComponents'
import styled, { css } from 'styled-components/macro'
import { pxToRems } from 'utils'
import { Text } from '../../../common/StyledComponents'
import { MarketDisplay } from './StockPrice'

interface PriceWrapperProps {
  size?: MarketDisplay
}

interface IStockPriceChangeWrapperAttrs {
  change: number
  isHidden: Boolean | undefined
}

export const SymbolText = styled(BoldText)`
  color: ${({ theme }) => theme.textColorPrimary};
`

export const LatestPrice = styled.div``

const StockPriceLarge = css`
  font-size: ${pxToRems(16)};
  line-height: ${pxToRems(12)};
  grid-gap: 0;
  ${LatestPrice} {
    font-size: ${pxToRems(32)};
  }
`

export const StockPriceWrapper = styled(VerticalDataContents)<PriceWrapperProps>`
  min-width: ${pxToRems(240)};
  align-items: center;
  font-size: ${pxToRems(12)};
  grid-gap: 0.5rem;
  padding: ${pxToRems(4)} 0;
  border-right: 1px solid ${({ theme }) => theme.primary.corePrimary3};
  &:last-child {
    border-right: none;
  }
  ${({ size }) => size === MarketDisplay.Large && StockPriceLarge};
`

export const StockPriceChangeWrapper = styled.div<IStockPriceChangeWrapperAttrs>`
  display: ${({ isHidden }) => (isHidden ? 'none' : 'grid')};
  font-weight: 500;
  grid-gap: 0.25em;
  grid-auto-flow: column;
  align-items: center;
  align-self: end;
  margin-left: ${pxToRems(4)};
  ${Text} {
    color: ${({ theme, change }) => (change < 0 ? theme.accents.accentNegative : theme.accents.accentPositive)};
  }
`
