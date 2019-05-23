import React from 'react'
import { DataCard } from '../../../common/StyledComponents'
import { styled } from '../../../rt-theme'
import ChartIQ from './chart-iq/ChartIQContext'

interface IHistoryData {
  olhc: IOlhcData
  previousClose: number | null
  dataPoints: IDataPoint[]
}

interface IOlhcData {
  open: number
  low: number
  high: number
  close: number
}

interface IDataPoint {
  x: string
  y: string
}

const History: React.FunctionComponent<{ history: IHistoryData; id: string }> = ({
  history: {
    olhc: { open, low, high, close },
    dataPoints,
    previousClose,
  },
  id,
}) => {
  const historyTitle = (
    <HeaderContainer>
      <div>
        <span style={{ fontWeight: 600 }}>O&nbsp;</span>
        <span style={{ opacity: 0.59 }}>{open}</span>
      </div>
      <div>
        <span style={{ fontWeight: 600 }}>L&nbsp;</span>
        <span style={{ opacity: 0.59 }}>{low}</span>
      </div>
      <div>
        <span style={{ fontWeight: 600 }}>H&nbsp;</span>
        <span style={{ opacity: 0.59 }}>{high}</span>
      </div>
      <div>
        <span style={{ fontWeight: 600 }}>C&nbsp;</span>
        <span style={{ opacity: 0.59 }}>{close}</span>
      </div>
    </HeaderContainer>
  )

  return (
    <DataCard cardType="history" title={historyTitle}>
      <ChartIQ symbol={id} dataPoints={dataPoints} />
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
