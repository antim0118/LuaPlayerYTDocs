import { type PropsWithChildren } from 'react'
import type { EngineVersionValue } from '../types'
import { Text } from '@chakra-ui/react'
import { useVersionState } from '../hooks'

type Props = PropsWithChildren & {
  version: EngineVersionValue | EngineVersionValue[]
}

export const VersionableContent = ({ version, children }: Props) => {
  const [currentVersion] = useVersionState()

  const getVersionIsVisible = (v: EngineVersionValue) => v === currentVersion

  const childrenIsVisible = Array.isArray(version)
    ? version.some(getVersionIsVisible)
    : getVersionIsVisible(version)

  if (!childrenIsVisible) return

  return (
    <Text>
      {children}
    </Text>
  )
}
