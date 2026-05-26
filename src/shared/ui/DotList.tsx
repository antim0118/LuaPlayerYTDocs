import { List } from '@chakra-ui/react'
import type { PropsWithChildren } from 'react'

export const DotList = ({ children }: PropsWithChildren) => {
  return (
    <List.Root pl={6}>
      {Array.isArray(children)
        ? children.map((child) => (
          <List.Item>{child}</List.Item>
        ))
        : <List.Item>{children}</List.Item>}
    </List.Root>
  )
}
