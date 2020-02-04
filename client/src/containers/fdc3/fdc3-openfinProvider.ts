import { Context } from 'openfin-fdc3'
import { FDC3Provider } from './fdc3-providerType'

export class FDC3OpenfinProvider implements FDC3Provider {
  private _fdc3 = import('openfin-fdc3')

  public broadcast(context: Context) {
    this._fdc3.then(fdc3 => fdc3.broadcast(context))
  }

  public async addContextListener(handler: (context: Context) => void) {
    const fdc3 = await this._fdc3
    return fdc3.addContextListener(handler)
  }
}
