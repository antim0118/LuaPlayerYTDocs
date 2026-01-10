import type { LPYTVersion } from "./types/LPYTVersion";
import type { TabType } from "./types/TabType";

export const HEADER_HEIGHT = 100;

export const VERSIONS: LPYTVersion[] = ["0.5_beta_mcsm", "0.5_beta_2", "0.5_beta_3"];

export const DEFAULT_VERSION: LPYTVersion = "0.5_beta_3";

export const HEADER_TABS: TabType[] = [
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
