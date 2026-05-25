import type { TabsProps } from './types'
import { Flex } from '@chakra-ui/react'
import { TabLink } from './TabLink'

export const Tabs = ({
  items,
  selectedKey,
  onChangeSelectedKey
}: TabsProps) => {
  const tabs = items.map((item) => (
    <TabLink
      key={item.key}
      item={item}
      isSelected={item.key === selectedKey}
      onClick={() => onChangeSelectedKey?.(item.key)}
    />
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
