import { Button, Flex, Heading } from '@chakra-ui/react'
import { LuMenu, LuMoon, LuSun } from 'react-icons/lu'
import { useColorMode, useColorPalette } from '../../ui/ColorMode'
import { useContext } from 'react'
import { AppContext } from '@/AppContext'
import { HEADER_HEIGHT, HEADER_TABS, MAIN_CONTAINER_WIDTH } from '@/constants'
import { Tabs, Logo } from '@/shared/ui'
import { usePageRouting } from '@/hooks/usePageRouting'

export const Header = () => {
  const { toggleColorMode, colorMode } = useColorMode()
  // const [locale, setLocale, localeList] = useLocale();
  const { setMobileMenuIsOpened } = useContext(AppContext)
  const { headerColors: { bgColor } } = useColorPalette()
  const { category, goToCategory } = usePageRouting()

  const tabs = <Tabs items={HEADER_TABS} selectedKey={category} onChangeSelectedKey={goToCategory} />

  const heading = (
    <Heading as="h3" size="lg" fontWeight={900} userSelect="none">
      LuaPlayerYT
    </Heading>
  )

  const rightSideButtons = (
    <Flex gap={2}>
      <Button variant="ghost" onClick={toggleColorMode}>
        {colorMode === 'light' ? <LuMoon /> : <LuSun />}
      </Button>
      {/* <Menu.Root onSelect={(v) => setLocale(v.value)}>
        <Menu.Trigger asChild>
          <Button variant="ghost" fontFamily="Twemoji Country Flags" fontSize={20}>
            {getCountryFlagFromCode(locale)}
          </Button>
        </Menu.Trigger>
        <Menu.Positioner>
          <Menu.Content>
            {localeList.map((v) => (
              <Menu.Item key={v} value={v} fontFamily="Twemoji Country Flags">
                {getCountryFlagFromCode(v)}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root> */}
    </Flex>
  )

  const pcHeader = (
    <Flex justify="space-between" align="center" height={60} paddingX={5} hideBelow="md">
      <Flex>
        <Logo width={36} height={36} />
      </Flex>
      {heading}
      {rightSideButtons}
    </Flex>
  )

  const mobileHeader = (
    <Flex justify="space-between" align="center" height={60} paddingX={5} hideFrom="md">
      <Button variant="ghost" onClick={() => setMobileMenuIsOpened?.((v: boolean) => !v)}>
        <LuMenu />
      </Button>
      <Flex alignItems="center" gap={4}>
        <Logo width={36} height={36} />
        {heading}
      </Flex>
      {rightSideButtons}
    </Flex>
  )

  return (
    <Flex
      height={HEADER_HEIGHT}
      justify="space-between"
      direction="column"
      position="sticky"
      width="full"
      zIndex={1}
      top={0}
      shadow="sm"
      background={bgColor}
    >
      <Flex
        flexDirection="column"
        margin="auto"
        width="stretch"
        maxWidth={MAIN_CONTAINER_WIDTH}
        height="100%"
      >
        {pcHeader}
        {mobileHeader}
        <Flex justify="space-between" align="center" height={40}>
          {tabs}
        </Flex>
      </Flex>
    </Flex>
  )
}
