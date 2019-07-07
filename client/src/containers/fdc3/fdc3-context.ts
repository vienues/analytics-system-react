import React from 'react'

const Fdc3Context = React.createContext({} as Context)

export const Fdc3ContextProvider = Fdc3Context.Provider
export const Fdc3ContextConsumer = Fdc3Context.Consumer
export default Fdc3Context

export type Context = SecurityContext | OrganizationContext | ContactContext | ContextBase

export interface SecurityContext extends ContextBase {
  type: 'security'
  id: { [key: string]: string } & { default: string }
}

export interface OrganizationContext extends ContextBase {
  type: 'organization'
  id: { [key: string]: string } & { default: string }
}

export interface ContactContext extends ContextBase {
  type: 'contact'
  name: string
  id: { email?: string; twitter?: string; phone?: string }
}

/**
 * Base object that all contexts must extend.
 *
 * A context object is open for extension with any custom properties/metadata.
 */
export interface ContextBase {
  /**
   * The type of the context that uniquely identifies it, e.g. "fdc3.instrument"
   * Used to refer to the accepted context(s) when declaring intents.
   */
  type: string

  /**
   * The name of the context data (optional).
   * Implementors of context may choose to make the name mandatory.
   */
  name?: string

  /**
   * An optional map of any equivalent identifiers for the
   * context type, e.g. ISIN, CUSIP, etc. for an instrument.
   */
  id?: { [k: string]: string | undefined }

  /**
   * A context object is open for extension with any custom properties/metadata.
   */
  [k: string]: any // tslint:disable-line:no-any

  market?: string
}
