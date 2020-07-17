import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'

window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault()
  window.beforeInstallPromptEvent = e
})

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.register()
