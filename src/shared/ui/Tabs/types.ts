export type TabItemType = {
  key: string
  label: string
  disabled?: boolean
}

export type TabsProps = {
  items: TabItemType[]
  selectedKey?: string
  onChangeSelectedKey?: (key: string) => void
}
