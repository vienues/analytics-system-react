// https://github.com/apollographql/react-apollo/issues/1980

import { NetworkStatus } from 'apollo-client'
import React, { ReactNode } from 'react'
import { Query, QueryProps, QueryResult } from 'react-apollo'
import styled from 'styled-components'
import AdaptiveLoader from '../common/AdaptiveLoader'

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

// @ts-ignore
type OmitChildren<T> = Omit<T, 'children'>

const LoadableStyle = styled.div<{ minWidth?: string; minHeight?: string }>`
  width: 100%;
  min-width: ${({ minWidth = '100%' }) => minWidth};
  height: 100%;
  min-height: ${({ minHeight = '100%' }) => minHeight};
  border-radius: 0.1875rem;
  background-color: ${({ theme }) => theme.core.lightBackground};
  color: ${({ theme }) => theme.core.textColor};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  opacity: 0.59;
  fill: ${({ theme }) => theme.core.textColor};
`

interface IAppQueryProps<Data, Variables> {
  children: (data: Data, result: QueryResult<Data, Variables>) => ReactNode
  renderNetworkStatus?: (networkStatus: NetworkStatus, result: QueryResult<Data, Variables>) => ReactNode
  renderError?: (error: Error, result: QueryResult<Data, Variables>) => ReactNode
  renderNoData?: (result: QueryResult<Data, Variables>) => ReactNode
}

export class AppQuery<Data, Variables> extends React.Component<
  OmitChildren<QueryProps<Data, Variables>> & IAppQueryProps<Data, Variables>
> {
  constructor(props: OmitChildren<QueryProps<Data, Variables>> & IAppQueryProps<Data, Variables>) {
    super(props)
    this.onQueryResults = this.onQueryResults.bind(this)
  }
  public defaultRenderNetworkStatus = (networkStatus: NetworkStatus, _: QueryResult<Data, Variables>) => {
    if (networkStatus === NetworkStatus.loading) {
      return (
        <LoadableStyle>
          <AdaptiveLoader size={50} speed={1.4} />
        </LoadableStyle>
      )
    }
    return null
  }
  public defaultRenderError = (_: Error, result: QueryResult<Data, Variables>) => {
    if (!result.data) {
      return (
        <span>
          Something went wrong
          <span />
        </span>
      )
    }
    return null
  }
  public defaultRenderNoData = (_: QueryResult<Data, Variables>) => {
    return <div>No data</div>
  }
  public render() {
    const { ...queryProps } = this.props
    return <Query<Data, Variables> {...queryProps}>{this.onQueryResults}</Query>
  }

  private onQueryResults = (result: QueryResult<Data, Variables>) => {
    const { children, renderNetworkStatus, renderError, renderNoData } = this.props
    const networkStatusNode = (renderNetworkStatus || this.defaultRenderNetworkStatus)(result!.networkStatus, result)
    if (networkStatusNode) {
      return networkStatusNode
    }
    const errorNode = result.error ? (renderError || this.defaultRenderError)(result!.error!, result) : undefined
    if (errorNode) {
      return errorNode
    }
    const noDataNode = !result.data ? (renderNoData || this.defaultRenderNoData)(result) : undefined
    if (noDataNode) {
      return noDataNode
    }
    return children(result.data!, result)
  }
}
