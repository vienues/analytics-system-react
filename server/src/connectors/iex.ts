import { join } from 'path'
import __fetch from 'node-fetch'

const ENDPOINT = 'https://api.iextrading.com/1.0'

export async function fetch(path: string | string[], options?: any) {
  path = join('/', ...(Array.isArray(path) ? path : [path]))
  let response

  try {
    response = await __fetch(`${ENDPOINT}${path}`, {
      method: 'get',
      // cache: 'no-cache',
      redirect: 'follow',
      headers: {
        Accept: 'application/json',
      },
    })
  } catch (e) {
    console.log('IEX request error', e)
  }

  if (response) {
    try {
      return await response.json()
    } catch (e) {
      throw new Error('Invalid Stock')
    }
  }
}
