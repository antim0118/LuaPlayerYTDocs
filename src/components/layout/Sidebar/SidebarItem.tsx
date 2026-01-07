import type { SidebarItemType } from "./Sidebar";
import { Box, Link } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useColorPalette } from "../../ui/ColorMode";
import { LuExternalLink } from "react-icons/lu";
import { useContext } from "react";
import { AppContext } from "@/AppContext";

type Props = {
  item: SidebarItemType;
  isSelected: boolean;
};

export const SidebarItem = ({ item, isSelected }: Props) => {
  const navigate = useNavigate();
  const { setMobileMenuIsOpened } = useContext(AppContext);
  const { accentColor, selectedFontColor } = useColorPalette();
  const isExternalLink = item.link.startsWith("http");

  const onClickHandler = () => {
    if (!isExternalLink) navigate(`../${item.link}`, { relative: "path" });
    setMobileMenuIsOpened?.(false);
  };

  return (
    <Box key={item.link}>
      <Link
        href={isExternalLink ? item.link : "#"}
        target={isExternalLink ? "_blank" : undefined}
        onClick={onClickHandler}
        fontWeight={isSelected ? "bolder" : "normal"}
        bgColor={isSelected ? accentColor : undefined}
        color={isSelected ? selectedFontColor : undefined}
        width="full"
        p={2}
        _focus={{ outline: "unset" }}
        userSelect="none"
        borderRadius={8}
        transition={"background 0.25s, color 0.25s"}
      >
        {isSelected && "> "}
        {item.text}
        {isExternalLink && <LuExternalLink />}
      </Link>
    </Box>
  );
};
