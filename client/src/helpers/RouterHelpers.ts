import { ABMHistory } from 'containers/history'
import React from 'react'
import { RouteComponentProps } from 'react-router'
import { Company, MainLayout, News, OLHCHistory, Peers, Search, Stats } from '../containers'
import { Cryptocurrencies, Currencies, Stocks } from '../containers/main-layout/Markets'

interface IComponenetElement {
  component: React.ElementType
  props?: {
    [key: string]: any
  }
}

interface IComponentWithProps {
  [path: string]: IComponenetElement
}

interface IPathParams {
  '0'?: string
  to?: string
  from?: string
  id?: string
}

export default class RouterHelper {
  public static get RootRouterItems(): IComponentWithProps {
    return RouterHelper.rootRouterItems
  }

  public static get MainRouterItems(): IComponentWithProps {
    return RouterHelper.mainRouterItems
  }

  public static RenderRootRouterElement(e: RouteComponentProps): JSX.Element {
    return RouterHelper.renderRouterElement(
      RouterHelper.RootRouterItems[e.match.path],
      e.match.params as IPathParams,
      true,
    )
  }

  public static RenderMainRouterElement(e: RouteComponentProps): JSX.Element {
    return RouterHelper.renderRouterElement(
      RouterHelper.MainRouterItems[e.match.path],
      e.match.params as IPathParams,
      false,
    )
  }

  private static rootRouterItems: IComponentWithProps = {
    '/': { component: MainLayout },
    '/(bond|crypto|currency|future|index|stock)/:id?': { component: MainLayout },
    '/(currency)/:from/:to': { component: MainLayout },
    '/company/:id?': { component: Company },
    '/history/:id?': { component: OLHCHistory },
    '/news/:id?': { component: News },
    '/peers/:id?': { component: Peers },
    '/search/:id?': { component: Search, props: { url: /search/ } },
    '/stats/:id?': { component: Stats },
    '/abm/:from/:to': { component: ABMHistory },
  }

  private static mainRouterItems: IComponentWithProps = {
    '/': { component: Stocks },
    '/bond/:id?': { component: News },
    '/crypto/:id?': { component: Cryptocurrencies },
    '/currency/:from?/:to?': { component: Currencies },
    '/future/:id?': { component: News },
    '/index/:id?': { component: News },
    '/stock/:id?': { component: Stocks },
  }

  private static renderRouterElement(element: IComponenetElement, params: IPathParams, isRoot: boolean) {
    if (element) {
      const market = params[0] || 'stock'
      let id
      if (params.id) {
        id = params.id
      } else if (params.from && params.to) {
        id = `${params.from}/${params.to}`
      }
      if (isRoot || id) {
        return React.createElement(element.component, {
          ...element.props,
          id,
          market,
        })
      }
    }
    return React.createElement('div')
  }
}
