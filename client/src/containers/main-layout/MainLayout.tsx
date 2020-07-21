import React, { useCallback, useContext, useState } from 'react'
import { IApolloContainerProps } from '../../common/IApolloContainerProps'
import { MainLayoutWrapper } from '../../common/StyledComponents'
import { MarketSegment } from '../../__generated__/types'
import { SearchContext, SearchContextProvider } from '../search/SearchContext'
import AppBar from './AppBar'
import { PWABanner, PWAInstallBanner } from './PWAInstallPrompt'
import { CurrentSymbolLayout } from './CurrentSymbolLayout'

const SESSION = 'PWABanner'

const MainLayout: React.FunctionComponent<IApolloContainerProps & { market: MarketSegment }> = props => {
  const [banner, setBanner] = useState<string>(sessionStorage.getItem(SESSION) || PWABanner.NotSet)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const { currentSymbol } = useContext(SearchContext)

  const updateBanner = useCallback(
    (value: PWABanner) => {
      setBanner(value)
      sessionStorage.setItem(SESSION, value)
    },
    [setBanner],
  )

  return (
    <MainLayoutWrapper hasNoSearch={!currentSymbol}>
      <PWAInstallBanner
        banner={banner}
        updateBanner={updateBanner}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <SearchContextProvider>
        <AppBar />
        <CurrentSymbolLayout {...props} />
      </SearchContextProvider>
    </MainLayoutWrapper>
  )
}

export default MainLayout
