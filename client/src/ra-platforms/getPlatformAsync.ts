interface Navigator {
  standalone?: boolean
}

const isOpenFin = 'fin' in window
const isPWA = () =>
  (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) ||
  (window.navigator as Navigator).standalone

export const getOpenFinPlatform = () => import(/* webpackChunkName: "openfin" */ './openfin')

export const getBrowserPlatform = () => import(/* webpackChunkName: "browser" */ './browser')

export const getPWAPlatform = () => import(/* webpackChunkName: "browser" */ './pwa')

export const getPlatformAsync = async () => {
  if (isOpenFin) {
    console.info('Using OpenFin API')
    const { Openfin } = await getOpenFinPlatform()
    return new Openfin()
  }

  if (isPWA()) {
    console.info('Using PWA API')
    const { PWA } = await getPWAPlatform()
    return new PWA()
  }

  console.info('Using Browser API')
  const { Browser } = await getBrowserPlatform()
  return new Browser()
}
