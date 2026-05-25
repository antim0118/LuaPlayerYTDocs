import type { TabItemType } from './shared/ui/Tabs/types'
import type { LPYTVersion } from './types/LPYTVersion'

export const MAIN_CONTAINER_WIDTH = 1280

export const HEADER_HEIGHT = 100

export const VERSIONS: LPYTVersion[] = [
  /* "0.5_beta_mcsm", */
  '0.5_beta_2',
  '0.5_beta_3',
  '0.5_beta_4',
]

export const DEFAULT_VERSION: LPYTVersion = '0.5_beta_4'

export const HEADER_TABS: TabItemType[] = [
  {
    key: 'getstarted',
    label: 'Начало работы',
  },
  {
    key: 'docs',
    label: 'Документация',
  },
  {
    key: 'tutorials',
    label: 'Туториалы',
  },
  {
    key: 'libs',
    label: 'Библиотеки',
    disabled: true,
  },
  {
    key: 'games',
    label: 'Игры',
    disabled: true,
  },
] as const
