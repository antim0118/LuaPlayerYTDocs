import type { LuaFunction } from "@/types/lua";
import { Box, Heading, VStack, Text } from "@chakra-ui/react";
import { Argument } from "./Argument";
import { Code } from "@/components/Code";

type Props = {
  func: LuaFunction;
};

export const Function = ({ func }: Props) => {
  const argsList = func.args.map((arg) => (arg.isRequired ? arg.name : arg.name + "?")).join(", ");

  return (
    <Box key={func.name} id={func.name} borderTop="solid" pt={4} pb={4}>
      <Heading as="h2" size="xl" mb={4}>
        {func.name}({argsList})
      </Heading>
      <Text mb={4}>{func.description}</Text>
      {func.args.length > 0 && (
        <Box mb={4}>
          <Heading as="h3" size="md" mb={2}>
            Аргументы
          </Heading>
          <VStack align="stretch" gap={2}>
            {func.args.map((arg) => (
              <Argument key={arg.name} arg={arg} />
            ))}
          </VStack>
        </Box>
      )}
      {typeof func.return === "string" && (
        <Box>
          <Heading as="h3" size="md" mb={2}>
            Возвращает
          </Heading>
          <Code>
            {func.return}
            {func.returnDescription && ` - ${func.returnDescription}`}
          </Code>
        </Box>
      )}
    </Box>
  );
};
