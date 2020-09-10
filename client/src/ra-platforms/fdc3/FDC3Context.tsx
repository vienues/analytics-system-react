import React, { useState, useEffect } from 'react'
import { Context } from 'openfin/_v2/fdc3/main'

interface FDC3Context {
  fdc3Symbol : string | null,
  clearSymbol: () => void
}


export const FDC3Context = React.createContext<FDC3Context>({
  fdc3Symbol: null,
  clearSymbol: () => null,
})

export const FDC3Provider: React.FC = ({ children }) => {
  const [fdc3Symbol, setCurrentSymbol] = useState<string | null>(null)

  useEffect(() => {
    const setContext = (context: Context) => {
      console.info('Incoming FDC3 context', context)
      if (context.type === 'fdc3.instrument' && context.id?.ticker) {
        console.info(`FDC3 instrument recognised, setting current symbol to ticker "${context.id?.ticker}"`)
        setCurrentSymbol(context.id?.ticker)
      }
    }

    if (typeof fdc3 !== 'undefined') {
      fdc3.addContextListener(setContext)
      return () => {
        fdc3.addContextListener(setContext).unsubscribe()
      }
    }
    return () => null
  }, [])

  const clearSymbol = () => {
    setCurrentSymbol(null)
  }

  return <FDC3Context.Provider value={{ fdc3Symbol, clearSymbol }}>{children}</FDC3Context.Provider>
}
