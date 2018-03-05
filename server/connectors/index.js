import dns from 'dns'

export default async function(endpoint) {
  let promise = new Promise(resolve => {
    dns.lookup(endpoint, err => {
      if (err && err.code === 'ENOTFOUND') {
        resolve(false)
      } else {
        resolve(true)
      }
    })
  })

  let result = await promise

  return result
}
