export type LuaArgument = {
    name: string;
    isRequired: boolean;
    type: string[];
    description?: string;
};

export type LuaFunction = {
    name: string;
    args: LuaArgument[];
    return?: string | object;
    returnDescription?: string;
    description?: string;
};

export type LuaClass = {
    name: string;
    enum: { [name: string]: number };
    alias: { name: string; type: (string | number)[] }[];
    functions: LuaFunction[];
};

export type ParsedLuaFile = {
    meta: string;
    mainClass: LuaClass;
};
