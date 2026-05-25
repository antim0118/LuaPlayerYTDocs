import type { SpanProps } from '@chakra-ui/react'
import { Span } from '@chakra-ui/react'
import { ThemeProvider, useTheme } from 'next-themes'
import type { ThemeProviderProps } from 'next-themes'
import * as React from 'react'

export type ColorModeProviderProps = ThemeProviderProps

export const ColorModeProvider = (props: ColorModeProviderProps) => {
  return <ThemeProvider attribute="class" disableTransitionOnChange {...props} />
}

export type ColorMode = 'light' | 'dark'

export interface UseColorModeReturn {
  colorMode: ColorMode
  setColorMode: (colorMode: ColorMode) => void
  toggleColorMode: () => void
}

export const useColorMode = (): UseColorModeReturn => {
  const { resolvedTheme, setTheme, forcedTheme } = useTheme()
  const colorMode = forcedTheme || resolvedTheme
  const toggleColorMode = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }
  return {
    colorMode: colorMode as ColorMode,
    setColorMode: setTheme,
    toggleColorMode,
  }
}

export const useColorModeValue = <T,>(light: T, dark: T) => {
  const { colorMode } = useColorMode()
  return colorMode === 'dark' ? dark : light
}

export const LightMode = React.forwardRef<HTMLSpanElement, SpanProps>(function LightMode(props, ref) {
  return (
    <Span
      color="fg"
      display="contents"
      className="chakra-theme light"
      colorPalette="gray"
      colorScheme="light"
      ref={ref}
      {...props}
    />
  )
})

export const DarkMode = React.forwardRef<HTMLSpanElement, SpanProps>(function DarkMode(props, ref) {
  return (
    <Span
      color="fg"
      display="contents"
      className="chakra-theme dark"
      colorPalette="gray"
      colorScheme="dark"
      ref={ref}
      {...props}
    />
  )
})

export const useColorPalette = () => {
  const accentColor = useColorModeValue('#18181b', '#dc2626') // используется в лого
  const accentColorPalette = useColorModeValue('gray', 'red')
  const selectedFontColor = useColorModeValue('gray.200', 'gray.900')
  const bgColor = useColorModeValue('white', 'gray.900')
  const fgColor = useColorModeValue('#09090b', '#fafafa')
  const disabledColor = useColorModeValue('#A8A8AD', '#5A5A60')

  const headerColors = {
    bgColor
  }

  const tabsColors = {
    selectedTextColor: fgColor,
    disabledTextColor: disabledColor,
    textColor: useColorModeValue('#52525b', '#a1a1aa'),
    borderColor: accentColor
  }

  return {
    tabsColors,
    headerColors,
    accentColor,
    accentColorPalette,
    selectedFontColor,
    bgColor
  }
}
