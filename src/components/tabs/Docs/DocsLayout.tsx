import { Box, Flex } from '@chakra-ui/react'
import { Sidebar, type SidebarItemType } from '../../layout/Sidebar/Sidebar'
import type { JSX } from 'react'
import { PageContainer } from '../../layout/PageContainer'
import { usePageRouting } from '@/hooks/usePageRouting'
import Info from './pages/Info.mdx'
import Install from './pages/Install.mdx'
import Building from './pages/Building.mdx'
import Bugs from './pages/Bugs.mdx'

const content: { [link: string]: JSX.Element } = {
  ['info']: <Info />,
  ['install']: <Install />,
  ['building']: <Building />,
  ['bugs']: <Bugs />,
}

export const DocsLayout = () => {
  const { page } = usePageRouting()

  const sidebarItems: SidebarItemType[] = [
    {
      text: 'О проекте',
      link: 'info',
    },
    {
      text: 'Установка',
      link: 'install',
    },
    {
      text: 'Компиляция исходников',
      link: 'building',
    },
    {
      text: 'Известные баги/недочеты',
      link: 'bugs',
    },
    {
      text: 'Репозиторий на Github',
      link: 'https://github.com/antim0118/LuaPlayer-by-YuliaTeam',
    },
  ]

  return (
    <>
      <Sidebar items={sidebarItems} />

      <PageContainer>
        <Box mb={8}>
          {!!page && (
            <Flex direction="column" gap={6}>
              {content[page]}
            </Flex>
          )}
        </Box>
      </PageContainer>
    </>
  )
}
