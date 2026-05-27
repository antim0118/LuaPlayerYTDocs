import { useEffect, useState } from 'react'
import { Box, ChakraProvider, defaultSystem, Kbd } from '@chakra-ui/react'
import { ColorModeProvider, type ColorModeProviderProps } from '@/components/ui/ColorMode'
import { AppContext } from '@/AppContext'
import { MDXProvider } from '@mdx-js/react'
import type { MDXComponents } from 'mdx/types'
import { polyfillCountryFlagEmojis } from 'country-flag-emoji-polyfill'
import { DotList, NumericList } from '@/shared/ui'
import { ExternalLink } from '@/components/ExternalLink'
import { ImageSnippet } from '@/components/ImageSnippet'
import { Code } from '@/components/Code'

export const AppProvider = (props: ColorModeProviderProps) => {
  const [mobileMenuIsOpened, setMobileMenuIsOpened] = useState(false)

  useEffect(() => {
    polyfillCountryFlagEmojis()
  }, [])

  const mdxComponents: Readonly<MDXComponents> = {
    ExternalLink,
    ImageSnippet,
    NumericList,
    DotList,
    Kbd,
    Code,
    Image,
    Box
  }

  return (
    <AppContext value={{ mobileMenuIsOpened, setMobileMenuIsOpened }}>
      <MDXProvider components={mdxComponents}>
        <ChakraProvider value={defaultSystem}>
          <ColorModeProvider {...props} />
        </ChakraProvider>
      </MDXProvider>
    </AppContext>
  )
}
