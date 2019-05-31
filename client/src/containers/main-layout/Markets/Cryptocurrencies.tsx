import React from 'react'
import { IApolloContainerProps } from '../../../common/IApolloContainerProps'
import { MainContent, MainInnerContent, ScrollableArea } from '../../../common/StyledComponents'
import { Stats } from '../../index'

const Cryptocurrencies: React.FunctionComponent<IApolloContainerProps> = ({ id }) => {
  return (
    <ScrollableArea>
      <MainContent>
        <MainInnerContent>
          <Stats id={id} />
        </MainInnerContent>
      </MainContent>
    </ScrollableArea>
  )
}

export default Cryptocurrencies
