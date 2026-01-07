import { Code } from "@/components/Code";
import type { LuaArgument } from "@/types/lua";
import { Box, Flex, Text } from "@chakra-ui/react";

type Props = {
  arg: LuaArgument;
};

export const Argument = ({ arg }: Props) => {
  return (
    <Box key={arg.name}>
      <Flex>
        <Code>
          {arg.name}
          {!arg.isRequired && "?"}
        </Code>
        <Text fontStyle={"italic"} ml={1} fontWeight="light">
          ({arg.type.join(" | ")})
        </Text>
        {arg.description && <Text ml={1}>- {arg.description}</Text>}
      </Flex>
    </Box>
  );
};
