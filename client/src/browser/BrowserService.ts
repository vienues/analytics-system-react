import { IContainerService } from 'platformService/IContainerServices'

export class BrowserContainer extends IContainerService {
  public readonly agent = 'browser'

  constructor() {
    super()
    this.state = {
      win: undefined,
      app: undefined,
    }
  }

  public navigateParent = () => {}

  public broadcast = () => {}

  public addContextListener = () => {
    return new Promise<undefined>((res, rej) => {})
  }

  public navigateToStock = () => {}

  public OpenWindow = () => {}
}
