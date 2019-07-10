import { Context } from 'openfin-fdc3'
import React from 'react'

const Fdc3Context = React.createContext({} as Context)

export const Fdc3ContextProvider = Fdc3Context.Provider
export const Fdc3ContextConsumer = Fdc3Context.Consumer
export default Fdc3Context
