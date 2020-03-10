import { FDC3Provider } from './fdc3-providerType'
import { Context } from 'openfin-fdc3'

export class FDC3BrowserProvider implements FDC3Provider {
  public broadcast() {}
  public async addContextListener(handler: (context: Context) => void) {
    return undefined
  }
}
