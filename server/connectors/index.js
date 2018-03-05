import dns from 'dns'
import * as real from './iex'
import * as fake from './faker'

function checkConnection(endpoint, callback) {
  dns.lookup(endpoint, err => {
    if (err && err.code === 'ENOTFOUND') {
      callback(false)
    } else {
      callback(true)
    }
  })
}

let connector = real
let callback = result => (connector = result ? real : fake)

checkConnection('https://api.iextrading.com/1.0', callback)

export default connector
