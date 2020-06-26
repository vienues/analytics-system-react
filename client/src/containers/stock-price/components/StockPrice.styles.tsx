import styled from 'styled-components/macro'
import { BoldText, VerticalDataContents } from 'common/StyledComponents'
import { pxToRems } from 'utils'
import { Text } from '../../../common/StyledComponents'

interface IStockPriceWrapperAttrs {
  size?: number
}

interface IStockPriceChangeWrapperAttrs {
  change: number
  isHidden: Boolean | undefined
}

export const SymbolText = styled(BoldText)`
  color: ${({ theme }) => theme.textColorPrimary};
`

export const StockPriceWrapper = styled(VerticalDataContents)<IStockPriceWrapperAttrs>`
  min-width: ${pxToRems(240)};
  align-items: center;
  font-size: ${({ size }) => `${size}rem` || `inherit`};
  line-height: ${({ size }) => `${size}rem` || `inherit`};
  grid-gap: 0.5rem;
  padding: ${pxToRems(4)} 0;
  border-right: 1px solid ${({ theme }) => theme.primary.corePrimary3};
  &:last-child {
    border-right: none;
  }
`

export const StockPriceChangeWrapper = styled.div<IStockPriceChangeWrapperAttrs>`
  display: ${({ isHidden }) => (isHidden ? 'none' : 'grid')};
  grid-gap: 0.25em;
  grid-auto-flow: column;
  align-items: center;
  margin-left: 0.5rem;
  ${Text} {
    color: ${({ theme, change }) => (change < 0 ? theme.accents.accentNegative : theme.accents.accentPositive)};
  }
`
