import { useEffect } from 'react'

export const useGlobalKeyboard = (onKeyDown: (e: KeyboardEvent) => void) => {
  useEffect(() => {
    const onKeyDownHandler = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement

      if (['INPUT', 'TEXTAREA'].includes(el.tagName)) {
        return
      }

      onKeyDown(e)
    }

    document.addEventListener('keydown', onKeyDownHandler)

    return () => document.removeEventListener('keydown', onKeyDownHandler)
  }, [onKeyDown])
}
