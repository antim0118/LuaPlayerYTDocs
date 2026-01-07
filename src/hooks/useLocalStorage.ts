import { useState, type Dispatch, type SetStateAction } from "react";

type ReturnType<T> = [T, Dispatch<SetStateAction<T>>];

export const useLocalStorage = <T extends string>(key: string, defaultValue: string): ReturnType<T> => {
  let _defaultValue = defaultValue as T;

  const storageValue = localStorage.getItem(key);
  if (storageValue) {
    _defaultValue = storageValue as T;
  }

  const [value, setValue] = useState<T>(_defaultValue);

  localStorage.setItem(key, value);

  return [value, setValue];
};
