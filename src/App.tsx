import { APILayout } from '@/components/tabs/API/APILayout'
import { Header } from '@/components/layout/Header/Header'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { DocsLayout } from '@/components/tabs/Docs/DocsLayout'
import { Box } from '@chakra-ui/react'
import { useColorPalette } from './components/ui/ColorMode'
import { MainContainer } from '@/shared/ui'
import { NotFoundPage } from '@/pages'

export const App = () => {
  const { bgColor } = useColorPalette()

  return (
    <Box background={bgColor} minH="100vh">
      <BrowserRouter>
        <Header />
        <MainContainer>
          <Routes>
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/" element={<Navigate to="/docs/info" />} />

            <Route path="docs" element={<Navigate to="/docs/info" />}></Route>
            <Route path="docs/:category">
              <Route index element={<DocsLayout />} />
            </Route>

            <Route path="api" element={<Navigate to="/api/buttons" />}></Route>
            <Route path="api/:category" element={<APILayout />} />

            {/* <Route path="tutorials" element={<TutorialsLayout />} />
          <Route path="tutorials/:name" element={<TutorialsLayout />} /> */}
          </Routes>
        </MainContainer>
      </BrowserRouter>
    </Box>
  )
}
