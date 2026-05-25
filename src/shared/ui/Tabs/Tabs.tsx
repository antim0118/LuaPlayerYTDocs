import type { TabItemType, TabsProps } from './types'
import { Flex, Link } from '@chakra-ui/react'
import { useColorPalette } from '@/components/ui/ColorMode'

export const Tabs = ({
  items,
  selectedKey,
  onChangeSelectedKey
}: TabsProps) => {
  const { tabsColors: { borderColor, disabledTextColor, selectedTextColor, textColor } } = useColorPalette()

  const getTabTextColor = (item: TabItemType) => {
    if (item.key === selectedKey) {
      return selectedTextColor
    }

    if (item.disabled) {
      return disabledTextColor
    }

    return textColor
  }

  const getTabBorderShadow = (item: TabItemType) => {
    return `inset 0 ${item.key === selectedKey ? -2 : 0}px 0 0 ${borderColor}`
  }

  const tabs = items.map((item) => (
    <Link
      unstyled
      href="#"
      key={item.key}
      onClick={() => onChangeSelectedKey?.(item.key)}
      display="flex"
      alignItems="center"
      fontSize="sm"
      fontWeight="medium"
      color={getTabTextColor(item)}
      height="100%"
      boxShadow={getTabBorderShadow(item)}
      paddingX={4}
      flexShrink={0}
    >
      {item.label}
    </Link>
  ))

  return (
    <Flex
      height="100%"
      overflowX="auto"
      whiteSpace="nowrap"
      scrollbarWidth="none"
    >
      {tabs}
    </Flex>
  )
}
