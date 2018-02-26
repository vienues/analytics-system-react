import { ApolloLink } from 'apollo-link/lib/index'
import { Observable } from 'rxjs/Rx'
import { hasDirectives } from 'apollo-utilities'
import { Observable } from 'rxjs'

export const openfinLink = new ApolloLink((operation, forward) => {
  const isOpenfin = hasDirectives(['openfin'], operation.query)
  if (!isOpenfin) return forward(operation)

  console.log('sub to bus')
  return Observable.create(observer => {
    window.fin.desktop.InterApplicationBus.subscribe('*', null, 'SYMBOL.CHANGE', message => {
      observer.next(message)
    })
  })
})
