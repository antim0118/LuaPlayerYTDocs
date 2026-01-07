import { useLocalStorage } from "./useLocalStorage";

export const useLocale = () => {
  return useLocalStorage<"ru" | "en">("lang", "en");
};
