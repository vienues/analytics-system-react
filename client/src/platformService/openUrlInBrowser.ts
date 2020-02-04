import { MouseEvent } from 'react'

export const openUrlInBrowser = (e: MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault()
  if (typeof fin === 'undefined') {
    window.open(e.currentTarget.href)
  } else {
    fin.System.openUrlWithBrowser(e.currentTarget.href)
  }
}
