import { createContext, type Dispatch, type PropsWithChildren, type SetStateAction } from 'react'
import { DEFAULT_VERSION } from './constants'
import { useLocalStorage } from '@/shared/hooks'

export type VersionContextType = {
  version: string
  setVersion: Dispatch<SetStateAction<string>>
}

export const VersionContext = createContext<VersionContextType>({
  version: DEFAULT_VERSION,
  setVersion: () => {}
})

export const VersionProvider = (props: PropsWithChildren) => {
  const [version, setVersion] = useLocalStorage('version', DEFAULT_VERSION)

  return (
    <VersionContext value={{ version, setVersion }} {...props} />
  )
}
