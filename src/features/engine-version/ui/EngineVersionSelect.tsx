import { Select } from '@/shared/ui'
import { ENGINE_VERSIONS } from '../constants'
import { useVersionState } from '../hooks'

export const EngineVersionSelect = () => {
  const [selectedVersion, setSelectedVersion] = useVersionState()

  return (
    <Select
      items={ENGINE_VERSIONS}
      value={selectedVersion}
      onValueChange={setSelectedVersion}
      minWidth={100}
      width={100}
      dynamicWidth
    />
  )
}
