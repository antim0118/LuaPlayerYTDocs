import type { SelectRootProps } from '@chakra-ui/react'

export interface SelectProps extends Pick<SelectRootProps, 'width' | 'minWidth' | 'maxWidth'> {
  value: string
  onValueChange: (value: string) => void
  items: {
    label: string
    value: string
  }[]
  placeholder?: string
  dynamicWidth?: boolean
}
