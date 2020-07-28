import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { getEnvironment } from 'utils'

window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault()
  window.beforeInstallPromptEvent = e
})

ReactGA.initialize('UA-46320965-5', {
  debug: process.env.NODE_ENV === 'development',
})

async function init() {
  const env = getEnvironment()

  ReactGA.set({
    dimension3: env,
    page: '/',
  })

  ReactDOM.render(<App />, document.getElementById('root'))
  serviceWorker.register()
}

init()
