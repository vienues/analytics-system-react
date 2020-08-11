import { useContext } from 'react'
import { FDC3Context } from '../ra-platforms/fdc3/FDC3Context'

export const useFDC3Context = () => {
  return useContext(FDC3Context)
}
