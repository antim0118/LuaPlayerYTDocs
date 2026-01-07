import { useColorPalette } from "@/components/ui/color-mode";
import { Link, Tabs } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

type TabType = {
  text: string;
  value: string;
  disabled?: boolean;
};

const tabs: TabType[] = [
  {
    text: "Начало работы",
    value: "getstarted/info",
  },
  {
    text: "Документация",
    value: "docs/buttons",
  },
  {
    text: "Туториалы",
    value: "tutorials",
    disabled: true,
  },
  {
    text: "Библиотеки",
    value: "libs",
    disabled: true,
  },
  {
    text: "Игры",
    value: "games",
    disabled: true,
  },
  {
    text: "калькулятор емае",
    value: "textureCalc",
  },
];

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
          {tabs.map((tab) => (
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
