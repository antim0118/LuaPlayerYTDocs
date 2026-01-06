import type { LPYTVersion } from "@/types/LPYTVersion";
import { useState, type Dispatch, type SetStateAction } from "react";

type ReturnType = [LPYTVersion, Dispatch<SetStateAction<LPYTVersion>>];

export const useVersionState = (): ReturnType => {
    let defaultValue = "0.5_beta_2" as LPYTVersion;

    const storageVersion = localStorage.getItem("version");
    if (storageVersion) {
        defaultValue = storageVersion as LPYTVersion;
    }

    const [version, setVersion] = useState<LPYTVersion>(defaultValue);

    localStorage.setItem("version", version);

    return [version, setVersion];
};
