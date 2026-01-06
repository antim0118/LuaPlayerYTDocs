import { Box, Flex, Heading, Text, Spinner } from "@chakra-ui/react";
import { useParsedFiles } from "@/hooks/useParsedFiles";
import { Sidebar, type SidebarItemType } from "../../layout/Sidebar/Sidebar";
import { useParams } from "react-router-dom";
import { VersionSelector } from "../../VersionSelector";
import { Function } from "./Function";
import { MainContainer } from "../../layout/MainContainer";
import { useVersionState } from "@/hooks/useVersionState";
import { ExternalLink } from "@/components/ExternalLink";

export function DocsLayout() {
  const [version, setVersion] = useVersionState();
  const { files, isLoading, error } = useParsedFiles(version);
  const { category } = useParams();

  const fileCategory = files?.find((file) => file.mainClass.name === category);
  const mainClass = fileCategory?.mainClass;

  const sidebarItems = files?.map<SidebarItemType>((file) => ({
    text: file.mainClass.name,
    link: file.mainClass.name,
    isSelected: file.mainClass.name === category,
  }));

  const contentItems = mainClass?.functions.map((func) => <Function key={func.name} func={func} />);

  return (
    <Flex>
      <Sidebar items={sidebarItems}>
        <VersionSelector version={version} setVersion={setVersion} />
        <ExternalLink href={`/LLS/${version}/${version}.zip`}>Скачать LLS архив</ExternalLink>
      </Sidebar>

      <MainContainer>
        {isLoading ? (
          <Spinner size="xl" />
        ) : error ? (
          <Text color="red.500">Error: {error}</Text>
        ) : (
          <Box mb={8}>
            <Heading as="h1" size="xl" fontWeight={900} mb={6}>
              Класс: {mainClass?.name} {fileCategory?.meta !== mainClass?.name && ` (${fileCategory?.meta})`}
            </Heading>
            {contentItems}
          </Box>
        )}
      </MainContainer>
    </Flex>
  );
}
