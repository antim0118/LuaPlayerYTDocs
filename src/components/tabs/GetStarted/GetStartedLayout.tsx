import { Box, Flex, Text } from "@chakra-ui/react";
import { Sidebar, type SidebarItem } from "../../layout/Sidebar/Sidebar";
import type { JSX } from "react";
import { useParams } from "react-router-dom";
import { Info } from "./pages/Info";
import { Install } from "./pages/Install";
import { MainContainer } from "../../layout/MainContainer";
import { Building } from "./pages/Building";

const content: { [link: string]: JSX.Element } = {
  ["info"]: <Info />,
  ["install"]: <Install />,
  ["123"]: <Text>Емае</Text>,
  ["building"]: <Building />,
  ["bugs"]: <Text>Да я хз вроде всё идеально работает хер докопаешься</Text>,
};

export const GetStartedLayout = () => {
  const { category } = useParams();

  const sidebarItems: SidebarItem[] = [
    {
      text: "О проекте",
      link: "info",
    },
    {
      text: "Установка",
      link: "install",
    },
    {
      text: "Компиляция исходников",
      link: "building",
    },
    {
      text: "Известные баги/недочеты",
      link: "bugs",
    },
    {
      text: "Репозиторий на Github",
      link: "https://github.com/antim0118/LuaPlayer-by-YuliaTeam",
    },
  ];

  return (
    <Flex>
      <Sidebar items={sidebarItems} />

      <MainContainer>
        <Box mb={8}>
          {!!category && (
            <>
              {/* <Heading as="h1" size="xl" mb={6}>
                                    {sidebarItems.find((item) => item.link === category)?.text}
                                </Heading> */}
              {content[category]}
            </>
          )}
        </Box>
      </MainContainer>
    </Flex>
  );
};
