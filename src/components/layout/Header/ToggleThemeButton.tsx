import { useColorMode } from '@/components/ui/ColorMode'
import { Button } from '@chakra-ui/react'
import { LuMoon, LuSun } from 'react-icons/lu'

export const ToggleThemeButton = () => {
  const { toggleColorMode, colorMode } = useColorMode()

  const isDark = colorMode === 'dark'

  return (
    <Button
      variant="ghost"
      onClick={toggleColorMode}
    >
      {isDark ? <LuSun /> : <LuMoon />}
    </Button>
  )
}
