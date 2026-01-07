import { Flex, Image, Text } from "@chakra-ui/react";
import { type PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  src: string;
  maxW?: string;
  margin?: number;
};

export const ImageSnippet = ({ src, maxW, children, margin }: Props) => {
  return (
    <Flex flexDirection={"column"} alignItems={"center"} m={margin}>
      <Image src={src} maxW={maxW ?? "max-content"} rounded={"xl"} />
      <Text fontStyle={"italic"} fontSize={"small"} mt={2}>
        {children}
      </Text>
    </Flex>
  );
};
