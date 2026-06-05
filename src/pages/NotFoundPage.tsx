import { useColorPalette } from '@/components/ui/ColorMode'
import { usePageRouting } from '@/hooks'
import { ROUTES } from '@/routes'
import { Flex, Heading, Text, Link } from '@chakra-ui/react'

export const NotFoundPage = () => {
  const { goToCategory } = usePageRouting()
  const { accentColor } = useColorPalette()

  const mainCategoryKey = ROUTES[0].key

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
