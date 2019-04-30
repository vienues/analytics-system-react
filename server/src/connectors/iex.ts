import { join } from 'path'
import __fetch from 'node-fetch'

const ENDPOINT = 'https://api.iextrading.com/1.0'

export async function fetch<T>(path: string | string[], options?: any): Promise<T> {
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

  throw new Error('Something went wrong')
}
