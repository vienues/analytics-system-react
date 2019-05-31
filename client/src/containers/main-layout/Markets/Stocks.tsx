import React from 'react'
import { IApolloContainerProps } from '../../../common/IApolloContainerProps'
import { MainContent, MainInnerContent, ScrollableArea } from '../../../common/StyledComponents'
import { Company, News, OLHCHistory, Peers, Stats } from '../../index'

const Stocks: React.FunctionComponent<IApolloContainerProps> = ({ id }) => {
  return (
    <ScrollableArea>
      <MainContent>
        <MainInnerContent>
          <OLHCHistory id={id} />
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
