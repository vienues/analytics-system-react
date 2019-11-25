import React from 'react'
import { DataCard, OpaqueLabel, StrongLabel } from '../../../common/StyledComponents'
import { styled } from '../../../rt-theme'
import { StockHistoryContainer } from '../StockHistory'

interface IHistoryData {
  olhc: IOlhcData
}

interface IOlhcData {
  open: number | null
  low: number | null
  high: number | null
  close: number | null
}

const History: React.FunctionComponent<{ history: IHistoryData; id: string }> = ({
  history: {
    olhc: { open, low, high, close },
  },
  id,
}) => {
  const historyTitle = (
    <HeaderContainer>
      <div>
        <StrongLabel>O&nbsp;</StrongLabel>
        <OpaqueLabel>{open === null ? `N/A` : open}</OpaqueLabel>
      </div>
      <div>
        <StrongLabel>L&nbsp;</StrongLabel>
        <OpaqueLabel>{low === null ? `N/A` : low}</OpaqueLabel>
      </div>
      <div>
        <StrongLabel>H&nbsp;</StrongLabel>
        <OpaqueLabel>{high === null ? `N/A` : high}</OpaqueLabel>
      </div>
      <div>
        <StrongLabel>C&nbsp;</StrongLabel>
        <OpaqueLabel>{close === null ? `N/A` : close}</OpaqueLabel>
      </div>
    </HeaderContainer>
  )

  return (
    <DataCard cardType="history" title={historyTitle} instrument={id}>
      <StockHistoryContainer id={id} />
    </DataCard>
  )
}

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  font-size: 1.25rem;
  justify-content: start;
  grid-gap: 1rem;
`

export default History
