import { ApolloLink } from 'apollo-link/lib/index'
import { hasDirectives } from 'apollo-utilities'
import { getMainDefinition } from 'apollo-utilities/lib/index'
import { Observable } from 'rxjs'

const createSubscription = () => {
  return Observable.create((observer: any) => {
    ;(window as any).fin.desktop.InterApplicationBus.subscribe('*', null, 'SYMBOL.CHANGE', (message: any) => {
      observer.next(message)
    })
  })
}

const createQuery = () => {
  const id = 'VOD'
  return Observable.fromPromise(
    Promise.resolve({
      data: {
        selection: {
          id,
          symbol: id,
          __typename: 'Selection',
        },
      },
    }),
  )
}

export const openfinLink = new ApolloLink((operation, forward) => {
  const isOpenfin = hasDirectives(['openfin'], operation.query)
  if (!isOpenfin && forward) {
    return forward(operation)
  }

  const op = getMainDefinition(operation.query)
  const isSubscription = op.kind === 'OperationDefinition' && op.operation === 'subscription'

  return isSubscription ? createSubscription() : createQuery()
})
