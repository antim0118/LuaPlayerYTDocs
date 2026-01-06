import { Box, Container } from "@chakra-ui/react";
import { type PropsWithChildren } from "react";

export const MainContainer = (props: PropsWithChildren) => {
  return (
    <Box flex="1" p={8} h="100%" md={{ pl: 300 }} overflowY="auto">
      <Container maxW={1280}>{props.children}</Container>
    </Box>
  );
};
