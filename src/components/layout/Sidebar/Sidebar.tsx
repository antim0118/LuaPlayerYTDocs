import { Box, VStack } from '@chakra-ui/react'
import { useContext, type PropsWithChildren } from 'react'
import { useColorPalette } from '../../ui/ColorMode'
import { AppContext } from '@/AppContext'
import { SidebarItem } from './SidebarItem'
import { HEADER_HEIGHT, SIDEBAR_WIDTH } from '@/constants'
import { usePageRouting } from '@/hooks/usePageRouting'

export type SidebarItemType = {
  text: string
  link: string
  isSelected?: boolean
}

export const Sidebar = (props: PropsWithChildren & { items?: SidebarItemType[] }) => {
  const { bgColor, borderColor } = useColorPalette()
  const { mobileMenuIsOpened } = useContext(AppContext)
  const { page } = usePageRouting()

  const sidebarItems = props.items?.map((item, idx) => {
    return <SidebarItem key={idx} item={item} isSelected={page === item.link} />
  })

  return (
    <Box
      w={SIDEBAR_WIDTH}
      borderRightStyle="solid"
      borderRightWidth={1}
      borderColor={borderColor}
      position="fixed"
      p={4}
      h={`calc(100vh - ${HEADER_HEIGHT}px)`}
      overflowY="auto"
      background={bgColor}
      mdDown={{
        // display: mobileMenuIsOpened ? "unset" : "none",
        transition: 'transform 0.25s cubic-bezier(0.5, 0, 0, 1)',
        transform: mobileMenuIsOpened ? 'translateX(0)' : 'translateX(-100%)',
        zIndex: 1,
      }}
    >
      <VStack align="stretch" gap={6}>
        {props.children}
        <VStack align="stretch" gap={0}>
          {sidebarItems}
        </VStack>
      </VStack>
    </Box>
  )
}
