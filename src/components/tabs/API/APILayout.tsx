import { Box, Heading, Text, Spinner } from '@chakra-ui/react'
import { useParsedFiles, useVersionState, usePageRouting } from '@/hooks'
import { Sidebar, type SidebarItemType } from '../../layout/Sidebar/Sidebar'
import { VersionSelector } from '../../VersionSelector'
import { Function } from './Function'
import { PageContainer } from '../../layout/PageContainer'
import { ExternalLink } from '@/components/ExternalLink'

export const APILayout = () => {
  const [version, setVersion] = useVersionState()
  const { files, isLoading, error } = useParsedFiles(version)
  const { page } = usePageRouting()

  const fileCategory = files?.find((file) => file.mainClass.name === page)
  const mainClass = fileCategory?.mainClass

  const sidebarItems = files?.map<SidebarItemType>((file) => ({
    text: file.mainClass.name,
    link: file.mainClass.name,
    isSelected: file.mainClass.name === page,
  }))

  const contentItems = mainClass?.functions.map((func) => <Function key={func.name} func={func} />)

  return (
    <>
      <Sidebar items={sidebarItems}>
        <VersionSelector version={version} setVersion={setVersion} />
        <ExternalLink href={`/LLS/${version}/${version}.zip`}>Скачать LLS архив</ExternalLink>
      </Sidebar>

      <PageContainer>
        {isLoading
          ? (<Spinner size="xl" />)
          : error
            ? (<Text color="red.500">Error: {error}</Text>)
            : (
              <Box mb={8}>
                <Heading as="h1" size="xl" fontWeight={900} mb={6}>
                  Класс: {mainClass?.name} {fileCategory?.meta !== mainClass?.name && ` (${fileCategory?.meta})`}
                </Heading>
                {contentItems}
              </Box>
            )}
      </PageContainer>
    </>
  )
}
