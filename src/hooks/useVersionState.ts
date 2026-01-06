import { DEFAULT_VERSION } from "@/constants";
import type { LPYTVersion } from "@/types/LPYTVersion";
import { useState, type Dispatch, type SetStateAction } from "react";

type ReturnType = [LPYTVersion, Dispatch<SetStateAction<LPYTVersion>>];

export const useVersionState = (): ReturnType => {
    let defaultValue = DEFAULT_VERSION as LPYTVersion;

    const storageVersion = localStorage.getItem("version");
    if (storageVersion) {
        defaultValue = storageVersion as LPYTVersion;
    }

    const [version, setVersion] = useState<LPYTVersion>(defaultValue);

    localStorage.setItem("version", version);

    return [version, setVersion];
};
