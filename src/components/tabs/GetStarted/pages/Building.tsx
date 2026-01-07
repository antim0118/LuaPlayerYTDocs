import { ExternalLink } from "@/components/ExternalLink";
import { Flex, Text } from "@chakra-ui/react";

export const Building = () => {
  return (
    <Flex direction="column" gap={6}>
      <Text fontSize="6xl" fontWeight="900">
        Исходники есть! 😏
      </Text>
      <Text>Загрузить и найти инструкцию по скачиванию можно <ExternalLink href="https://github.com/antim0118/LuaPlayer-by-YuliaTeam">в репозитории</ExternalLink></Text>
    </Flex>
  );
};
