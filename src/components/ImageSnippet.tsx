import { Flex, Image, Text } from '@chakra-ui/react'
import { type PropsWithChildren } from 'react'
import { useColorPalette } from './ui/ColorMode'

type Props = PropsWithChildren & {
  src: string
  maxWidth?: string
  margin?: number
}

export const ImageSnippet = ({ src, maxWidth, children, margin }: Props) => {
  const { borderColor } = useColorPalette()

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      margin={margin}
    >
      <Image
        src={src}
        maxWidth={maxWidth ?? 'max-content'}
        rounded="xl"
        boxSizing="border-box"
        border="1px solid"
        borderColor={borderColor}
      />
      <Text fontStyle="italic" fontSize="small" mt={2}>
        {children}
      </Text>
    </Flex>
  )
}
