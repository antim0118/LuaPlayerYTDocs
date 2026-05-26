import { MAIN_CONTAINER_WIDTH, SIDEBAR_WIDTH } from '@/constants'
import { Box, Container } from '@chakra-ui/react'
import { type PropsWithChildren } from 'react'

type Props = PropsWithChildren & {
  disablePaddingForSidebar?: boolean
}

export const PageContainer = (props: Props) => {
  const { disablePaddingForSidebar } = props

  return (
    <Box
      width="100%"
      flex="1"
      padding={8}
      height="100%"
      md={!disablePaddingForSidebar ? { pl: SIDEBAR_WIDTH } : undefined}
      overflowY="auto"
    >
      <Container

        maxWidth={MAIN_CONTAINER_WIDTH - SIDEBAR_WIDTH}
      >{props.children}
      </Container>
    </Box>
  )
}
