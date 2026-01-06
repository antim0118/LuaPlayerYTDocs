"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";
import { AppContext } from "@/AppContext";
import { useState } from "react";

export function Provider(props: ColorModeProviderProps) {
  const [mobileMenuIsOpened, setMobileMenuIsOpened] = useState(false);

  return (
    <AppContext value={{ mobileMenuIsOpened, setMobileMenuIsOpened }}>
      <ChakraProvider value={defaultSystem}>
        <ColorModeProvider {...props} />
      </ChakraProvider>
    </AppContext>
  );
}

