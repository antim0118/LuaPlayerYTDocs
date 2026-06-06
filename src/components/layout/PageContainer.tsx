import { MAIN_CONTAINER_WIDTH, SIDEBAR_WIDTH } from '@/constants'
import { usePageRouting } from '@/hooks'
import { Box, Container } from '@chakra-ui/react'
import { type PropsWithChildren } from 'react'

export const PageContainer = ({ children }: PropsWithChildren) => {
  const { hideSidebar } = usePageRouting()

  return (
    <Box
      width="100%"
      flex="1"
      padding={8}
      height="100%"
      md={!hideSidebar ? { pl: SIDEBAR_WIDTH } : undefined}
      overflowY="auto"
    >
      <Container
        maxWidth={MAIN_CONTAINER_WIDTH - SIDEBAR_WIDTH}
      >{children}
      </Container>
    </Box>
  )
}
