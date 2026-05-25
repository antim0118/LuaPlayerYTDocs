import { APILayout } from '@/components/tabs/API/APILayout'
import { Header } from '@/components/layout/Header/Header'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { GetStartedLayout } from '@/components/tabs/GetStarted/GetStartedLayout'
import { NotFound } from './components/layout/NotFound'
import { Box } from '@chakra-ui/react'
import { useColorPalette } from './components/ui/ColorMode'
import { useEffect } from 'react'
import { polyfillCountryFlagEmojis } from 'country-flag-emoji-polyfill'

export const App = () => {
  const { bgColor } = useColorPalette()

  useEffect(() => {
    polyfillCountryFlagEmojis()
  }, [])

  return (
    <Box background={bgColor} minH="100vh">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Navigate to="/getstarted/info" />} />

          <Route path="getstarted" element={<Navigate to="/getstarted/info" />}></Route>
          <Route path="getstarted/:category">
            <Route index element={<GetStartedLayout />} />
          </Route>

          <Route path="api" element={<Navigate to="/api/buttons" />}></Route>
          <Route path="api/:category" element={<APILayout />} />
        </Routes>
      </BrowserRouter>
    </Box>
  )
}
