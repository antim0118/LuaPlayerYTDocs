import {
  createListCollection,
  Portal,
  Select as SelectComponent,
  type SelectRootProps,
  type SelectValueTextProps
} from '@chakra-ui/react'
import { useEffect, useMemo, useRef, useState } from 'react'
import type { SelectProps } from './types'

export const Select = ({
  items,
  value,
  onValueChange,
  placeholder,
  width,
  dynamicWidth,
  ...props
}: SelectProps) => {
  const collection = useMemo(() => createListCollection({ items }), [items])
  const valueRef = useRef<HTMLSpanElement>(null)

  const [dynamicWidthProps, setDynamicWidthProps] = useState<Partial<SelectRootProps>>({ width })

  const dynamicWidthTextProps: Partial<SelectValueTextProps> = dynamicWidth
    ? {
      position: 'absolute',
      lineClamp: 'unset',
      width: 'max-content',
      maxWidth: 'unset',
      textWrap: 'unset'
    }
    : {}

  useEffect(() => {
    if (!valueRef.current) return

    if (!dynamicWidth) {
      setDynamicWidthProps({})
      return
    }

    const updateWidth = (entries: ResizeObserverEntry[]) => {
      setDynamicWidthProps({
        width: entries[0].contentRect.width + 42,
      })
    }

    const observer = new ResizeObserver(updateWidth)
    observer.observe(valueRef.current)
    return () => observer.disconnect()
  }, [valueRef, dynamicWidth])

  const dropdown = (
    <Portal>
      <SelectComponent.Positioner>
        <SelectComponent.Content>
          {collection.items.map((v) => (
            <SelectComponent.Item item={v} key={v.value}>
              {v.label}
              <SelectComponent.ItemIndicator />
            </SelectComponent.Item>
          ))}
        </SelectComponent.Content>
      </SelectComponent.Positioner>
    </Portal>
  )

  return (
    <SelectComponent.Root
      {...props}
      {...dynamicWidthProps}
      collection={collection}
      size="sm"
      onValueChange={(e) => onValueChange(e.value[0])}
      value={[value]}
      transition="width 0.25s"
      overflow="clip"
    >
      <SelectComponent.HiddenSelect />
      <SelectComponent.Control>
        <SelectComponent.Trigger>
          <SelectComponent.ValueText
            {...dynamicWidthTextProps}
            ref={valueRef}
            placeholder={placeholder}
          />
        </SelectComponent.Trigger>
        <SelectComponent.IndicatorGroup>
          <SelectComponent.Indicator />
        </SelectComponent.IndicatorGroup>
      </SelectComponent.Control>
      {dropdown}
    </SelectComponent.Root>
  )
}
