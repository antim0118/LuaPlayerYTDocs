import type { LPYTVersion } from "@/types/LPYTVersion";
import type { ParsedLuaFile } from "@/types/lua";
import { parseLuaToObject } from "@/utils/luaParser";
import { useEffect, useState } from "react";

let files: ParsedLuaFile[] | null = null;

export const useParsedFiles = (version: LPYTVersion) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>();

  console.log(files);

  useEffect(() => {
    const fetchLuaFiles = async () => {
      try {
        files = null;
        setIsLoading(true);

        const response = await fetch(`${process.env.PUBLIC_URL}/LLS/${version}/index.json`);
        if (!response.ok) {
          throw new Error("Failed to fetch file list");
        }
        console.log("status", response.status);
        const fileList = await response.json();

        const loadFile = async (filePath: string) => {
          const fileResponse = await fetch(`${process.env.PUBLIC_URL}/LLS/${version}/${filePath}.lua`);
          if (!fileResponse.ok) {
            throw new Error(`Failed to fetch file: ${filePath}`);
          }
          return await fileResponse.text();
        };

        const fileContents = await Promise.all(fileList.map(loadFile));
        // console.log("fileContents: ", fileContents);

        const parsedFiles = await Promise.all(fileContents.map(async (content) => await parseLuaToObject(content)));
        // console.log("parsedFiles: ", parsedFiles);

        files = parsedFiles;
        setError(null);
      } catch (err) {
        console.error(err);
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchLuaFiles();
  }, [version]);

  return { files, isLoading, error };
};
