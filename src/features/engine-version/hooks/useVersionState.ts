import { useContext } from 'react'
import {
  VersionContext,
  type VersionContextType as ContextType
} from '../context'

export const useVersionState = (): [ContextType['version'], ContextType['setVersion']] => {
  const { version, setVersion } = useContext(VersionContext)

  return [version, setVersion]
}
