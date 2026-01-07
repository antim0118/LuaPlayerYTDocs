import { Button, Flex, Heading } from "@chakra-ui/react";
import { LuMenu, LuMoon, LuSun } from "react-icons/lu";
import { useColorMode, useColorPalette } from "../../ui/ColorMode";
import { HeaderTabs } from "./HeaderTabs";
import { Logo } from "@/components/ui/logo";
import { useContext } from "react";
import { AppContext } from "@/AppContext";

export const Header = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const { setMobileMenuIsOpened } = useContext(AppContext);
  const { bgColor } = useColorPalette();

  const pcHeader = (
    <>
      <Flex justify="space-between" align="center" height={60} hideBelow="md">
        <Logo width={36} height={36} />
        <Heading size="lg" fontWeight={900} userSelect="none">
          LuaPlayerYT
        </Heading>
        <Button variant="ghost" onClick={toggleColorMode}>
          {colorMode === "light" ? <LuMoon /> : <LuSun />}
        </Button>
      </Flex>
      <Flex justify="space-between" align="center" height={40} hideBelow="md">
        <HeaderTabs />
      </Flex>
    </>
  );

  const mobileHeader = (
    <>
      <Flex justify="space-between" align="center" height={60} hideFrom="md">
        <Button variant="ghost" onClick={() => setMobileMenuIsOpened?.((v: boolean) => !v)}>
          <LuMenu />
        </Button>
        <Flex alignItems="center" gap={4}>
          <Logo width={36} height={36} />
          <Heading size="lg" fontWeight={900} userSelect="none">
            LuaPlayerYT
          </Heading>
        </Flex>
        <Button variant="ghost" onClick={toggleColorMode}>
          {colorMode === "light" ? <LuMoon /> : <LuSun />}
        </Button>
      </Flex>
      <Flex justify="space-between" align="center" height={40} hideFrom="md">
        <HeaderTabs />
      </Flex>
    </>
  );

  return (
    <Flex
      height={100}
      justify="space-between"
      direction="column"
      position="sticky"
      width="full"
      zIndex={1}
      pl={5}
      pr={5}
      top={0}
      shadow="sm"
      background={bgColor}
    >
      {pcHeader}
      {mobileHeader}
    </Flex>
  );
};
