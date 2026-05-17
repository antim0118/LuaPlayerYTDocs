import { Box, Container } from '@chakra-ui/react'
import { type PropsWithChildren } from 'react'

type Props = PropsWithChildren & {
  disablePaddingForSidebar?: boolean
}

export const MainContainer = (props: Props) => {
  const { disablePaddingForSidebar } = props

  return (
    <Box flex="1" p={8} h="100%" md={!disablePaddingForSidebar ? { pl: 300 } : undefined} overflowY="auto">
      <Container maxW={1280}>{props.children}</Container>
    </Box>
  )
}
