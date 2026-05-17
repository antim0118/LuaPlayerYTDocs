import { DEFAULT_VERSION } from '@/constants'
import type { LPYTVersion } from '@/types/LPYTVersion'
import { useLocalStorage } from './useLocalStorage'

export const useVersionState = () => useLocalStorage<LPYTVersion>('version', DEFAULT_VERSION)
