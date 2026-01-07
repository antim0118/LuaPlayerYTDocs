import { useColorPalette } from "@/components/ui/ColorMode";
import { HEADER_TABS } from "@/constants";
import { Link, Tabs } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

type Props = {
  orientation?: "horizontal" | "vertical";
};

export const HeaderTabs = ({ orientation }: Props) => {
  const navigate = useNavigate();

  let location = useLocation().pathname.substring(1);
  if (!location || !location.length) {
    location = "getstarted/info"; //костыль из-за tabs.root
  }

  const handleNavigate = ({ value }: { value: string }) => navigate(`/${value}`);

  const { accentColorPalette } = useColorPalette();

  return (
    <>
      <Tabs.Root
        defaultValue={location}
        navigate={handleNavigate}
        w="full"
        userSelect="none"
        colorPalette={accentColorPalette}
        orientation={orientation}
        // value={location}
        // onValueChange={(v)=>console.log(v.value)}
      >
        <Tabs.List>
          {HEADER_TABS.map((tab) => (
            <Tabs.Trigger key={tab.value} value={tab.value} asChild disabled={tab.disabled}>
              <Link unstyled href="#">
                {tab.text}
              </Link>
            </Tabs.Trigger>
          ))}
        </Tabs.List>
      </Tabs.Root>
    </>
  );
};
