import { useEffect } from 'react'

export const useGlobalKeyboard = (onKeyDown: (e: KeyboardEvent) => void) => {
  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)

    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onKeyDown])
}
