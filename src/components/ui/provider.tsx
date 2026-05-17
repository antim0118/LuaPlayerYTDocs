import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { ColorModeProvider, type ColorModeProviderProps } from './ColorMode'
import { AppContext } from '@/AppContext'
import { useState } from 'react'

export const Provider = (props: ColorModeProviderProps) => {
  const [mobileMenuIsOpened, setMobileMenuIsOpened] = useState(false)

  return (
    <AppContext value={{ mobileMenuIsOpened, setMobileMenuIsOpened }}>
      <ChakraProvider value={defaultSystem}>
        <ColorModeProvider {...props} />
      </ChakraProvider>
    </AppContext>
  )
}
