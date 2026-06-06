import type { ENGINE_VERSIONS } from './constants'

export type EngineVersionValue = (typeof ENGINE_VERSIONS)[number]['value']

export type EngineVersionType = {
  /** Идентификатор для порядка выпущенной версии, аналог номеру билда */
  id: number
  value: string
  label: string
}
