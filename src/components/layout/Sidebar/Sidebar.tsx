import { Box, VStack } from "@chakra-ui/react";
import { useContext, type PropsWithChildren } from "react";
import { useLocation } from "react-router-dom";
import { useColorPalette } from "../../ui/ColorMode";
import { match } from "path-to-regexp";
import { AppContext } from "@/AppContext";
import { SidebarItem } from "./SidebarItem";

export type SidebarItemType = {
  text: string;
  link: string;
  isSelected?: boolean;
};

export const Sidebar = (props: PropsWithChildren & { items?: SidebarItemType[] }) => {
  const { bgColor } = useColorPalette();
  const location = match("/:tab/:category")(useLocation().pathname);
  const { mobileMenuIsOpened } = useContext(AppContext);

  let category = "";
  if (typeof location === "object") {
    category = location.params["category"] as string;
  }

  const sidebarItems = props.items?.map((item, idx) => {
    return <SidebarItem key={idx} item={item} isSelected={category === item.link} />;
  });

  return (
    <Box
      w="300px"
      borderRightStyle="solid"
      borderRightWidth={1}
      borderColor="#80808040"
      position="fixed"
      p={4}
      h="-webkit-calc(100vh - 100px)"
      overflowY="auto"
      background={bgColor}
      mdDown={{
        // display: mobileMenuIsOpened ? "unset" : "none",
        transition: "transform 0.25s cubic-bezier(0.5, 0, 0, 1)",
        transform: mobileMenuIsOpened ? "translateX(0)" : "translateX(-100%)",
        zIndex: 1,
      }}
    >
      <VStack align="stretch" gap={6}>
        {props.children}
        <VStack align="stretch" gap={0}>
          {sidebarItems}
        </VStack>
      </VStack>
    </Box>
  );
};
