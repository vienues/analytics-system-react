import { Context, ContextListener } from 'openfin-fdc3'

export interface FDC3Provider {
  broadcast(context: Context): void
  addContextListener(callback: (context: Context) => void): Promise<ContextListener | undefined>
}
