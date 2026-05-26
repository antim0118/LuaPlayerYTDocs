import { Box, Text } from '@chakra-ui/react'
import { Sidebar, type SidebarItemType } from '../../layout/Sidebar/Sidebar'
import type { JSX } from 'react'
import { Info } from './pages/Info'
import { Install } from './pages/Install'
import { PageContainer } from '../../layout/PageContainer'
import { Building } from './pages/Building'
import { usePageRouting } from '@/hooks/usePageRouting'

const content: { [link: string]: JSX.Element } = {
  ['info']: <Info />,
  ['install']: <Install />,
  ['building']: <Building />,
  ['bugs']: <Text>Да я хз вроде всё идеально работает хер докопаешься</Text>,
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
            <>
              {/* <Heading as="h1" size="xl" mb={6}>
                                    {sidebarItems.find((item) => item.link === category)?.text}
                                </Heading> */}
              {content[page]}
            </>
          )}
        </Box>
      </PageContainer>
    </>
  )
}
