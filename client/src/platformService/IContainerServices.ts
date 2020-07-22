import { Context, ContextListener } from 'openfin-fdc3'
import { IWindowConfig } from 'ra-platforms/openfin/OpenfinService'
import { Container } from 'unstated'

type WindowIdentity = { name?: string }
type ApplicationIdentity = { uuid: string }
type ContainerState = {
  app: { identity: ApplicationIdentity } | undefined
  win: { identity: WindowIdentity } | undefined
}

type AgentType = 'browser' | 'desktop'

export abstract class IContainerService extends Container<ContainerState> {
  abstract readonly agent: AgentType
  abstract broadcast(context: Context): void
  abstract addContextListener(callback: (context: Context) => void): Promise<ContextListener | undefined>
  abstract navigateToStock(symbol: string): void
  abstract OpenWindow(config: IWindowConfig, onClose?: () => void): void
  abstract navigateParent(symbol: string): void
}
