import { ABMHistory } from 'containers/history'
import React from 'react'
import { IApolloContainerProps } from '../../../common/IApolloContainerProps'
import { MainContent, MainInnerContent, ScrollableArea } from '../../../common/StyledComponents'
import { styled } from '../../../rt-theme'

const CurrenciesWrapper = styled('div')`
  background-color: ${({ theme }) => theme.core.darkBackground};
  padding: 1rem;
  padding-bottom: 2rem;
`
const Currencies: React.FunctionComponent<IApolloContainerProps> = ({ id }) => {
  return (
    <CurrenciesWrapper>
      <ScrollableArea>
        <MainContent>
          <MainInnerContent>
            <ABMHistory id={id} />
          </MainInnerContent>
        </MainContent>
      </ScrollableArea>
    </CurrenciesWrapper>
  )
}

export default Currencies
