import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

import 'ress/dist/ress.min.css'
import './assets/fonts/verta/typeface.css'

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement)

registerServiceWorker()
