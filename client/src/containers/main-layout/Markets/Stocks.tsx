import React from 'react'
import { IApolloContainerProps } from '../../../common/IApolloContainerProps'
import { MainGridArea, NewsGridArea, FooterStatsWrapper } from '../../../common/StyledComponents'
import { Company, History, News, Peers, Stats } from '../../index'
import Footer from '../Footer'

const Stocks: React.FunctionComponent<IApolloContainerProps> = ({ id }) => {
  return (
    <>
      <MainGridArea>
        <History id={id} />
        <FooterStatsWrapper>
          <Stats id={id} />
          <Footer />
        </FooterStatsWrapper>
      </MainGridArea>
      <NewsGridArea>
        <News id={id} />
        <Company id={id} />
        <Peers id={id} />
      </NewsGridArea>
    </>
  )
}

export default Stocks
