import { Header } from '@/components/layout/Header/Header'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import { useColorPalette } from './components/ui/ColorMode'
import { MainContainer } from '@/shared/ui'
import { NotFoundPage } from '@/pages'
import { CategoryPageRouter } from '@/widgets/CategoryPageRouter'

export const App = () => {
  const { bgColor } = useColorPalette()

  return (
    <Box background={bgColor} minH="100vh">
      <BrowserRouter basename="/LuaPlayerYTDocs">
        <Header />
        <MainContainer>
          <Routes>
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/" element={<Navigate to="/docs/info" />} />
            <Route path="/:category" element={<CategoryPageRouter />} />
            <Route path="/:category/:page" element={<CategoryPageRouter />} />
          </Routes>
        </MainContainer>
      </BrowserRouter>
    </Box>
  )
}
