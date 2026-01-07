import { type PropsWithChildren } from "react";
import { Code as ChakraCode } from "@chakra-ui/react";

export const Code = ({ children }: PropsWithChildren) => {
  return <ChakraCode background={"#88888833"}>{children}</ChakraCode>;
};
