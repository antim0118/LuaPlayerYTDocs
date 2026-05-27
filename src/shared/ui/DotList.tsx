import { List } from '@chakra-ui/react'
import type { PropsWithChildren } from 'react'

export const DotList = ({ children }: PropsWithChildren) => {
  return (
    <List.Root pl={6}>
      {Array.isArray(children)
        ? children.map((child, idx) => (
          <List.Item key={idx}>{child}</List.Item>
        ))
        : <List.Item>{children}</List.Item>}
    </List.Root>
  )
}
