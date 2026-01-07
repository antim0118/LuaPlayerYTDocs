import { useLocalStorage } from "./useLocalStorage";

const localeList = ["ru", "us"];
type LocaleListType = (typeof localeList)[number];

type LocaleStorageLocaleReturnType = ReturnType<typeof useLocalStorage<LocaleListType>>;

type HookReturnType = [LocaleStorageLocaleReturnType[0], LocaleStorageLocaleReturnType[1], LocaleListType[]];

export const useLocale = (): HookReturnType => {
  const [locale, setLocale] = useLocalStorage<LocaleListType>("lang", "us");
  return [locale, setLocale, localeList];
};
