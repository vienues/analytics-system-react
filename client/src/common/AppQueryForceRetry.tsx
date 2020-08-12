/*
  AppQueryForcePoller is a component meant to circumvent the
  common 429 status coded error when working in conjunction with
  the IEX sandbox. As of today, this only applies to the
  development environment.
 */
import React, { useEffect, useMemo, useState } from 'react'
import { QueryResult } from '@apollo/client'
import { AppQueryDefaultLoadingIndicator } from './AppQuery'
import apolloClient from '../apollo/client'
import ConfigQuery from 'containers/config/Config.graphql'
import { Config } from 'containers/config/types/Config'

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
  isSandbox: null,
}

// TODO - don't expose host here, make this a graphql query
async function getForceQuerySettings() {
  if (forceQuerySettings.isSandbox === null) {
    try {
      const result = await apolloClient.query<Config>({
        errorPolicy: 'all',
        query: ConfigQuery
      })
      forceQuerySettings.isSandbox = result.data?.config.isSandbox ?? null
      if (forceQuerySettings.isSandbox) {
        console.info('Server is running in sandbox mode, will retry requests')
      }
    } catch (ex) {
      console.error(ex)
    }
  }
  return forceQuerySettings
}

const checkQueryResultErrors = (result: any) => {
  const { errors = [], error = {} } = result
  return [...errors]
    .concat([...(error.graphQLErrors || [])])
    .filter(e => !!e)
    .map(error => error.message)
    .includes(APOLLO_QUERY_ERROR_MESSAGE_FOUR_TWO_NINE)
}

export const AppQueryForcePoller: React.FunctionComponent<IProps> = ({
  children,
  pollingIndicator,
  renderLoadingHeight,
  result,
}) => {
  const [isPolling, setIsPolling] = useState(false)
  const [settings, setSettings] = useState<ISettings>(forceQuerySettings)

  const loadingIndicator = useMemo(() => {
    return pollingIndicator || <AppQueryDefaultLoadingIndicator renderLoadingHeight={renderLoadingHeight} />
  }, [pollingIndicator, renderLoadingHeight])

  const { startPolling, stopPolling } = result

  useEffect(() => {
    getForceQuerySettings().then(({ isSandbox }) => {
      setSettings({ isSandbox })
    })
  }, [])

  if (settings.isSandbox === null) return loadingIndicator
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
