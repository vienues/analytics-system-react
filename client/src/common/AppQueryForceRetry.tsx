/*
  AppQueryForcePoller is a component meant to circumvent the
  common 429 status coded error when working in conjunction with
  the IEX sandbox. As of today, this only applies to the
  development environment.
 */
import React, {useEffect, useMemo, useState} from 'react'
import {QueryResult} from 'react-apollo'
import {AppQueryDefaultLoadingIndicator} from './AppQuery'

interface IProps {
  pollingIndicator?: JSX.Element
  renderLoadingHeight?: string
  result: QueryResult
}

interface ISettings {
  isSandbox: Boolean | null
}

const APOLLO_QUERY_ERROR_MESSAGE_FOUR_TWO_NINE: string = 'Request failed with status code 429'
const APOLLO_QUERY_FORCE_RETRY_INTERVAL_DURATION: number = 500

let forceQuerySettings: ISettings = {
  isSandbox: null
}

async function getForceQuerySettings() {
  if (forceQuerySettings.isSandbox === null) {
    const host = process.env.REACT_APP_ANALYTICS_SERVER_HOST || 'localhost:4000'
    try {
      const response = await fetch(`//${host}/iexsandbox`, {cache: 'force-cache'})
      const json = await response.json()
      forceQuerySettings.isSandbox = !!json.isSandbox
    } catch (ex) {
      console.error(ex)
    }
  }
  return forceQuerySettings
}

const checkQueryResultErrors = (result: any) => {
  const {errors = [], error = {}} = result
  return [...errors]
    .concat([...(error.graphQLErrors || [])])
    .filter(e => !!e)
    .map(error => error.message)
    .includes(APOLLO_QUERY_ERROR_MESSAGE_FOUR_TWO_NINE)
}

export const AppQueryForceRefetcher = (result: any, handler: Function, override: Boolean) => {
  return getForceQuerySettings()
    .then(({isSandbox}) => {
      if ((!!override || isSandbox) && checkQueryResultErrors(result))
        return setTimeout(handler, APOLLO_QUERY_FORCE_RETRY_INTERVAL_DURATION)
      return 0
    });
}

export const AppQueryForcePoller: React.FunctionComponent<IProps> = ({children, pollingIndicator, renderLoadingHeight, result}) => {
  const [isPolling, setIsPolling] = useState(false)
  const [settings, setSettings] = useState<ISettings>(forceQuerySettings)

  const loadingIndicator = useMemo(() => {
    return pollingIndicator || <AppQueryDefaultLoadingIndicator renderLoadingHeight={renderLoadingHeight}/>
  }, [pollingIndicator, renderLoadingHeight])

  const {startPolling, stopPolling} = result

  useEffect(() => {
    getForceQuerySettings()
      .then(({isSandbox}) => {
        setSettings({isSandbox})
      })
  }, [])

  if (settings.isSandbox === null)
    return loadingIndicator;
  else if (settings.isSandbox) {
    if (!result.data || Object.entries(result.data).length === 0) {
      if (checkQueryResultErrors(result)) {
        if (!isPolling) {
          setIsPolling(true)
          startPolling(APOLLO_QUERY_FORCE_RETRY_INTERVAL_DURATION)
        }
        return loadingIndicator
      }
    } else if (isPolling) {
      setIsPolling(false)
      stopPolling()
    }
  }

  return <>{children}</>
}
