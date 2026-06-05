import { useColorPalette } from '@/components/ui/ColorMode'
import { HEADER_TABS } from '@/constants'
import { usePageRouting } from '@/hooks'
import { Flex, Heading, Text, Link } from '@chakra-ui/react'

export const NotFoundPage = () => {
  const { goToCategory } = usePageRouting()
  const { accentColor } = useColorPalette()

  const mainCategoryKey = HEADER_TABS[0].key

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
