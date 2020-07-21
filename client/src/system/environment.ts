interface Navigator {
  standalone?: boolean
}

export default class Environment {
  static isPWA() {
    return (
      (window.matchMedia('(display-mode: standalone)').matches || (window.navigator as Navigator).standalone) ?? false
    )
  }
}
