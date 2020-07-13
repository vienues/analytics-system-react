import React from 'react'
import { IApolloContainerProps } from '../../../common/IApolloContainerProps'
import { FooterStatsWrapper, MainGridArea, NewsGridArea } from '../../../common/StyledComponents'
import { Company, History, News, Peers, Stats } from '../../index'

const Stocks: React.FunctionComponent<IApolloContainerProps> = ({ id }) => {
  return (
    <>
      <MainGridArea>
        <History id={id} />
        <FooterStatsWrapper>
          <Stats id={id} />
        </FooterStatsWrapper>
      </MainGridArea>
      <NewsGridArea>
        <Company id={id} />
        <Peers id={id} />
        <News id={id} />
      </NewsGridArea>
    </>
  )
}

export default Stocks
