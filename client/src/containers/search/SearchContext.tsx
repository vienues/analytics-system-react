import React, { createContext, Dispatch, useReducer } from 'react'
import { search_symbols } from './graphql/types/search'

interface IState {
  currentSymbol?: search_symbols | null
  errorMessage?: string | JSX.Element
  refetchAttempts?: number
  searching?: Boolean
  previousSearch?: boolean
}

export enum SearchContextActionTypes {
  AttemptRefetchSymbol = 'attemptRefetchSymbol',
  ClearedSymbol = 'clearedSymbol',
  FindSymbol = 'findSymbol',
  FoundSymbol = 'foundSymbol',
  SelectedSymbol = 'selectedSymbol',
  UnrecognizedSymbol = 'unrecognizedSymbol',
}

interface IAction {
  type: SearchContextActionTypes
  payload?: IState | null
}

interface IProvide extends IState {
  dispatch?: Dispatch<IAction>
}

const initialState: IState = { currentSymbol: null, refetchAttempts: 0, searching: false, previousSearch: false }

const reducer: React.Reducer<IState, IAction> = (state, action) => {
  switch (action.type) {
    case SearchContextActionTypes.AttemptRefetchSymbol:
      return { ...state, refetchAttempts: state.refetchAttempts ? state.refetchAttempts++ : 1 }
    case SearchContextActionTypes.ClearedSymbol:
      return { ...initialState }
    case SearchContextActionTypes.FindSymbol:
      return { ...initialState, searching: true, previousSearch: !!state.currentSymbol ?? false }
    case SearchContextActionTypes.FoundSymbol:
    case SearchContextActionTypes.SelectedSymbol:
      return { ...initialState, ...action.payload, previousSearch: true }
    case SearchContextActionTypes.UnrecognizedSymbol:
      return { ...initialState, ...action.payload }
    default:
      return state
  }
}

const SearchContext = createContext<IProvide>(initialState)
const SearchContextConsumer = SearchContext.Consumer

const SearchContextProvider: React.FunctionComponent = props => {
  const [state, dispatch] = useReducer<React.Reducer<IState, IAction>>(reducer, initialState)
  const value: IProvide = { ...state, dispatch }

  return <SearchContext.Provider value={value}>{props.children}</SearchContext.Provider>
}

export { SearchContext, SearchContextConsumer, SearchContextProvider }
