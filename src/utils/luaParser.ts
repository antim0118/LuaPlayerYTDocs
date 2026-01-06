import type { LuaFunction, ParsedLuaFile, LuaArgument } from "../types/lua";

interface ParserState {
    currentFunction?: LuaFunction;
    currentParam?: LuaArgument;
    inFunction: boolean;
    inParam: boolean;
    inReturn: boolean;
}

async function parseLuaToObject(luaContent: string): Promise<ParsedLuaFile> {
    const result: ParsedLuaFile = {
        meta: "",
        mainClass: {
            name: "",
            enum: {},
            alias: [],
            functions: [],
        },
    };

    const lines = luaContent.split(/\r?\n/);
    let state: ParserState = {
        inFunction: false,
        inParam: false,
        inReturn: false,
    };

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        if (!line) continue;

        if (line.startsWith("---@meta")) {
            result.meta = line.replace("---@meta", "").trim();
            continue;
        }

        if (line.startsWith("---@class") && !result.mainClass.name) {
            const className = line.replace("---@class", "").trim();
            result.mainClass.name = className;
            continue;
        }

        if (line.includes("=") && !line.startsWith("--")) {
            const [name, value] = line.split("=").map((s) => s.trim());
            if (name && value && !isNaN(parseInt(value))) {
                result.mainClass.enum[name] = parseInt(value);
            }
            continue;
        }

        if (line.startsWith("---@alias")) {
            const aliasContent = line.replace("---@alias", "").trim();
            const [name, types] = aliasContent.split(/\s+/);
            if (name && types) {
                const typeArray = types.split("|").map((type) => {
                    type = type.trim();
                    if (type.startsWith("`")) {
                        return type.slice(1, -1);
                    }
                    return parseInt(type);
                });
                result.mainClass.alias.push({ name, type: typeArray });
            }
            continue;
        }

        if (line.startsWith("---")) {
            const content = line.slice(3).trim();

            if (!state.inFunction) {
                state.currentFunction = {
                    name: "",
                    args: [],
                    description: content,
                };
                state.inFunction = true;
                continue;
            }

            if (line.startsWith("---@param")) {
                const paramContent = line.replace("---@param", "").trim();
                const firstSpaceIndex = paramContent.indexOf(" ");
                if (firstSpaceIndex === -1) continue;

                const name = paramContent.slice(0, firstSpaceIndex);
                const rest = paramContent.slice(firstSpaceIndex + 1).trim();

                const secondSpaceIndex = rest.indexOf(" ");
                const type = secondSpaceIndex === -1 ? rest : rest.slice(0, secondSpaceIndex);
                const description = secondSpaceIndex === -1 ? "" : rest.slice(secondSpaceIndex + 1);

                const isOptional = name.endsWith("?");
                const paramName = isOptional ? name.slice(0, -1) : name;

                const param: LuaArgument = {
                    name: paramName,
                    isRequired: !isOptional,
                    type: type.split("|").map((t) => t.trim()),
                    description,
                };

                if (state.currentFunction) {
                    state.currentFunction.args.push(param);
                }
                state.inParam = true;
                continue;
            }

            if (line.startsWith("---@return")) {
                const returnContent = line.replace("---@return", "").trim();
                const [type, ...descParts] = returnContent.split(/\s+/);
                const description = descParts.join(" ");

                if (state.currentFunction) {
                    state.currentFunction.return = type;
                    state.currentFunction.returnDescription = description;
                }
                state.inReturn = true;
                continue;
            }

            if (state.currentFunction && !state.inParam && !state.inReturn) {
                state.currentFunction.description += "\n" + content;
            }
            continue;
        }

        if (line.startsWith("function")) {
            const match = line.match(/function\s+(\w+)\.(\w+)\s*\(/);
            if (match && state.currentFunction) {
                const [, className, functionName] = match;
                state.currentFunction.name = `${className}.${functionName}`;

                result.mainClass.functions.push(state.currentFunction);

                state = {
                    inFunction: false,
                    inParam: false,
                    inReturn: false,
                };
            }
            continue;
        }
    }

    return result;
}

// async function fetchAndParseLua(url: string) {
//     try {
//         const response = await fetch(url);
//         const luaContent = await response.text();
//         return await parseLuaToObject(luaContent);
//     } catch (error) {
//         console.error("Error fetching or parsing Lua file:", error);
//         throw error;
//     }
// }

export { parseLuaToObject };
