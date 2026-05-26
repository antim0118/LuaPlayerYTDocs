import { HEADER_HEIGHT, MAIN_CONTAINER_WIDTH } from '@/constants'
import { Flex } from '@chakra-ui/react'
import { type PropsWithChildren } from 'react'

/** Контейнер, содержащий сайдбар и блок с полезной инфой */
export const MainContainer = ({ children }: PropsWithChildren) => {
  return (
    <Flex
      maxWidth={MAIN_CONTAINER_WIDTH}
      height="100%"
      minHeight={`calc(100vh - ${HEADER_HEIGHT}px)`}
      margin="auto"
      boxShadow="2xl"
    >
      {children}
    </Flex>
  )
}
