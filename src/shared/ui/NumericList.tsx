import { List } from '@chakra-ui/react'
import type { PropsWithChildren } from 'react'

export const NumericList = ({ children }: PropsWithChildren) => {
  return (
    <List.Root as="ol" listStyle="decimal" pl={6}>
      {Array.isArray(children) && children.map((child, idx) => (
        <List.Item key={idx}>{child}</List.Item>
      ))}
    </List.Root>
  )
}
