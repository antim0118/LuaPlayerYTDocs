import { APILayout } from '@/components/tabs/API/APILayout'
import { Header } from '@/components/layout/Header/Header'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { DocsLayout } from '@/components/tabs/Docs/DocsLayout'
import { NotFound } from './components/layout/NotFound'
import { Box, Kbd, Image } from '@chakra-ui/react'
import { useColorPalette } from './components/ui/ColorMode'
import { useEffect } from 'react'
import { polyfillCountryFlagEmojis } from 'country-flag-emoji-polyfill'
import { MainContainer } from './shared/ui/MainContainer'
import { MDXProvider } from '@mdx-js/react'
import { ExternalLink } from '@/components/ExternalLink'
import type { MDXComponents } from 'mdx/types'
import { ImageSnippet } from '@/components/ImageSnippet'
import { NumericList } from '@/shared/ui/NumericList'
import { DotList } from '@/shared/ui/DotList'
import { Code } from '@/components/Code'

export const App = () => {
  const { bgColor } = useColorPalette()

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
    <Box background={bgColor} minH="100vh">
      <MDXProvider components={mdxComponents}>
        <BrowserRouter>
          <Header />
          <MainContainer>
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Navigate to="/docs/info" />} />

              <Route path="docs" element={<Navigate to="/docs/info" />}></Route>
              <Route path="docs/:category">
                <Route index element={<DocsLayout />} />
              </Route>

              <Route path="api" element={<Navigate to="/api/buttons" />}></Route>
              <Route path="api/:category" element={<APILayout />} />

            </Routes>
          </MainContainer>
        </BrowserRouter>
      </MDXProvider>
    </Box>
  )
}
