import { createContext, type Dispatch, type SetStateAction } from "react";

type Context = {
    mobileMenuIsOpened?: boolean;
    setMobileMenuIsOpened?: Dispatch<SetStateAction<boolean>>;
};

export const AppContext = createContext<Context>({});
