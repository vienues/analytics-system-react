/** The Apollo cache seems to use a deep copy of an object and failed on storing functions.
 *  So we will store a globally accessible instance of Openfin.
 */
import { _Window } from 'openfin/_v2/api/window/window'
import { Application } from 'openfin/_v2/main'
import React from 'react'
import { Container, Provider, Subscribe } from 'unstated'

const fin = (window as any).fin

interface IOpinfinState {
  openfin?: {
    app: Application
    win: _Window
  }
}

interface IWindowConfig {
  name: string
  url: string
}

export class OpenfinContainer extends Container<IOpinfinState> {
  private readonly windows: Map<string, _Window> = new Map()

  constructor() {
    super()
    this.state = {}
    if (typeof fin !== 'undefined') {
      this.loadOpenfin()
    }
  }

  public NavigateToStock(symbol: string) {
    this.windows.forEach((window, name) => {
      // typings don't match functions
      window.navigate(`http://localhost:3000/${name}/${symbol}`)
      // (window as any).getNativeWindow().location.href =
    })
  }

  public async OpenWindow(config: IWindowConfig, onClose?: () => void) {
    const { name, url } = config
    const win = await new fin.desktop.Window(
      {
        autoShow: true,
        frame: false,
        name,
        state: 'normal',
        url,
      },
      () => {
        this.windows.set(name, win)
        if (onClose) {
          win.addEventListener('closed', () => {
            onClose()
            this.windows.delete(name)
          })
        }
      },
    )
  }

  public getWindowHandle(name: string): _Window | undefined {
    return this.windows.get(name)
  }

  private async loadOpenfin() {
    this.setState({
      openfin: {
        app: await fin.Application.getCurrent(),
        win: await fin.Window.getCurrent(),
      },
    })
  }
}

const OpenfinApi = new OpenfinContainer()

export const OpenfinApiProvider = (props: any) => {
  return <Provider inject={props.inject || [OpenfinApi]}>{props.children}</Provider>
}

export const OpenfinApiSubscribe = (props: any) => {
  return <Subscribe to={[OpenfinApi]}>{props.children}</Subscribe>
}

export default OpenfinApi
