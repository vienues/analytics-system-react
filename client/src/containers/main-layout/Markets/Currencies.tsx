import { ABMHistory } from 'containers/history'
import React from 'react'
import { IApolloContainerProps } from '../../../common/IApolloContainerProps'
import { MainContent, MainInnerContent, ScrollableArea } from '../../../common/StyledComponents'

const Currencies: React.FunctionComponent<IApolloContainerProps> = ({ id }) => {
  return (
    <ScrollableArea>
      <MainContent>
        <MainInnerContent>
          <ABMHistory id={id} />
        </MainInnerContent>
      </MainContent>
    </ScrollableArea>
  )
}

export default Currencies
