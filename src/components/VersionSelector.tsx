import { VERSIONS } from "@/constants";
import type { LPYTVersion } from "@/types/LPYTVersion";
import { createListCollection, Portal, Select } from "@chakra-ui/react";
import { type Dispatch, type SetStateAction } from "react";

type Props = {
  version: LPYTVersion;
  setVersion: Dispatch<SetStateAction<LPYTVersion>>;
};

const versionsCollection = createListCollection({
  items: VERSIONS.map((v) => ({
    label: "v" + v,
    value: v,
  })),
});

export const VersionSelector = ({ version, setVersion }: Props) => {
  return (
    <Select.Root
      collection={versionsCollection}
      size="sm"
      onValueChange={(e) => setVersion(e.value[0] as LPYTVersion)}
      value={[version]}
    >
      <Select.HiddenSelect />
      <Select.Label>Version</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Version" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {versionsCollection.items.map((v) => (
              <Select.Item item={v} key={v.value}>
                {v.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
};
