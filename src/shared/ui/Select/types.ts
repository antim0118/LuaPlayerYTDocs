import type { SelectRootProps } from '@chakra-ui/react'

export type SelectItemType = {
  label: string
  value: string
}

export interface SelectProps extends Pick<SelectRootProps, 'width' | 'minWidth' | 'maxWidth'> {
  value: string
  onValueChange: (value: string) => void
  items: readonly SelectItemType[]
  placeholder?: string
  dynamicWidth?: boolean
}
