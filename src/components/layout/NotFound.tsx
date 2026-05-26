import { Flex, Heading, Link, Text } from '@chakra-ui/react'
import { useColorPalette } from '../ui/ColorMode'
import { usePageRouting } from '@/hooks/usePageRouting'
import { HEADER_TABS } from '@/constants'

export const NotFound = () => {
  const { goToCategory } = usePageRouting()

  const mainCategoryKey = HEADER_TABS[0].key

  const { accentColor } = useColorPalette()

  return (
    <Flex
      direction="column"
      alignItems="center"
      marginX="auto"
      marginY={16}
    >
      <Heading as="a" color={accentColor} size="7xl">
        ёмаё.
      </Heading>
      <Text>ты попал на несуществующую страницу 😭</Text>

      <Link
        color="blue.400"
        textDecoration="underline"
        onClick={() => goToCategory(mainCategoryKey)}
      >
        братанчик-кабанчик, нажми сюда по приколу
      </Link>
    </Flex>
  )
}
