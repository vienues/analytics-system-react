import React, { useState } from 'react'
import { Context } from 'openfin/_v2/fdc3/main'

export const FDC3Context = React.createContext<{ fdc3Symbol: string | null }>({
  fdc3Symbol: null,
})

export const FDC3Provider: React.FC = ({ children }) => {
  const [fdc3Symbol, setCurrentSymbol] = useState<string | null>(null)

  const contextCallback = (context: Context) => {
    console.info('Incomming FDC3 context', context)
    if (context.type === 'fdc3.instrument' && context.id?.ticker) {
      setCurrentSymbol(context.id?.ticker)
    }
  }

  //   setTimeout(() => {
  //     setCurrentSymbol('AAPL')
  //   }, 7000)

  if (typeof fdc3 !== 'undefined') {
    fdc3.addContextListener(contextCallback)
  }

  return <FDC3Context.Provider value={{ fdc3Symbol }}>{children}</FDC3Context.Provider>
}
