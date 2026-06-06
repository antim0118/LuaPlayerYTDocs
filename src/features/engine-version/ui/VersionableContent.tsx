import { type PropsWithChildren } from 'react'
import type { EngineVersionValue } from '../types'
import { Text } from '@chakra-ui/react'
import { useVersionState } from '../hooks'
import { ENGINE_VERSIONS } from '../constants'

type Props = PropsWithChildren & {
  version: EngineVersionValue | EngineVersionValue[]
}

export const VersionableContent = ({ version, children }: Props) => {
  const [currentVersion] = useVersionState()

  const getVersionIsVisible = (v: EngineVersionValue) => v === currentVersion

  const childrenIsVisible = Array.isArray(version)
    ? version.some(getVersionIsVisible)
    : getVersionIsVisible(version)

  if (!childrenIsVisible) return null

  const getVersionLabel = (v: EngineVersionValue) => ENGINE_VERSIONS.find((ev) => ev.value === v)?.label

  const versionCount = Array.isArray(version) ? version.length : 1
  const versionsString = Array.isArray(version)
    ? version.map((v) => getVersionLabel(v)).join(', ')
    : getVersionLabel(version)

  const tooltipText = versionCount > 1
    ? `Данная информация относится к версиям: ${versionsString}`
    : `Данная информация относится к версии ${versionsString}`

  return (
    <Text
      textDecoration="underline"
      textDecorationStyle="dotted"
      textUnderlineOffset="3px"
      textDecorationColor="color-mix(in srgb, currentColor 50%, transparent)"
      cursor="help"
      title={tooltipText}
    >
      {children}
    </Text>
  )
}
