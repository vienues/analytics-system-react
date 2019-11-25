import React from 'react'
import { IApolloContainerProps } from '../../../common/IApolloContainerProps'
import { MainContent, MainInnerContent, ScrollableArea, DataCard } from '../../../common/StyledComponents'
import { Company, News, Peers, Stats } from '../../index'
import { StockHistoryContainer } from 'containers/history'

const Stocks: React.FunctionComponent<IApolloContainerProps> = ({ id }) => {
  return (
    <ScrollableArea>
      <MainContent>
        <MainInnerContent>
          <DataCard cardType="history" title={id} instrument={id}>
            <StockHistoryContainer id={id} />
          </DataCard>
          <Stats id={id} />
        </MainInnerContent>
        <MainInnerContent>
          <News id={id} />
          <Company id={id} />
          <Peers id={id} />
        </MainInnerContent>
      </MainContent>
    </ScrollableArea>
  )
}

export default Stocks
