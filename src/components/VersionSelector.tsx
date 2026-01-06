import type { LPYTVersion } from "@/types/LPYTVersion";
import { createListCollection, Portal, Select } from "@chakra-ui/react";
import { type Dispatch, type SetStateAction } from "react";

type Props = {
  version: LPYTVersion;
  setVersion: Dispatch<SetStateAction<LPYTVersion>>;
};

// const versions = ["0.31", "0.4", "0.5", "0.6"];
const versions = ["0.5_beta_mcsm", "0.5_beta_2", "0.5_beta_3"];

const versionsCollection = createListCollection({
  items: versions.map((v) => {
    // if (v == "0.5_beta1") {
    //     return {
    //         label: "v0.5 (BETA 1)",
    //         value: v,
    //     };
    // } else {
    return {
      label: "v" + v,
      value: v,
    };
    // }
  }),
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
