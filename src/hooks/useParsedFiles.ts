import type { EngineVersionValue } from '@/features/engine-version'
import type { ParsedLuaFile } from '@/types/lua'
import { parseLuaToObject } from '@/shared/helpers'
import { useEffect, useState } from 'react'

let files: ParsedLuaFile[] | null = null

export const useParsedFiles = (version: string | EngineVersionValue) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>()

  useEffect(() => {
    const fetchLuaFiles = async () => {
      try {
        files = null
        setIsLoading(true)

        // TODO: скорее всего, такой абсолютный путь поломает dev версию
        const response = await fetch(`/LuaPlayerYTDocs/LLS/${version}/index.json`)
        if (!response.ok) {
          throw new Error('Failed to fetch file list')
        }

        const fileList = await response.json()

        const loadFile = async (filePath: string) => {
          // TODO: скорее всего, такой абсолютный путь поломает dev версию
          const fileResponse = await fetch(`/LuaPlayerYTDocs/LLS/${version}/${filePath}.lua`)
          if (!fileResponse.ok) {
            throw new Error(`Failed to fetch file: ${filePath}`)
          }
          return await fileResponse.text()
        }

        const fileContents = await Promise.all(fileList.map(loadFile))

        const parsedFiles = await Promise.all(fileContents.map(async (content) => await parseLuaToObject(content)))

        files = parsedFiles
        setError(null)
      }
      catch (err) {
        console.error(err)
        setError(err instanceof Error ? err.message : 'An error occurred')
      }
      finally {
        setIsLoading(false)
      }
    }

    fetchLuaFiles()
  }, [version])

  return { files, isLoading, error }
}
