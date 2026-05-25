import { Link } from '@chakra-ui/react'
import { useEffect, useRef, type DOMAttributes } from 'react'
import type { TabItemType } from './types'
import { useColorPalette } from '@/components/ui/ColorMode'

interface TabLinkProps extends Pick<DOMAttributes<unknown>, 'onClick'> {
  item: TabItemType
  isSelected: boolean
}

export const TabLink = ({
  item,
  isSelected,
  onClick
}: TabLinkProps) => {
  const ref = useRef<HTMLAnchorElement>(null)
  const { tabsColors: { borderColor, disabledTextColor, selectedTextColor, textColor } } = useColorPalette()

  const getTabTextColor = () => {
    if (isSelected) {
      return selectedTextColor
    }

    if (item.disabled) {
      return disabledTextColor
    }

    return textColor
  }

  useEffect(() => {
    if (!isSelected || !ref.current) return

    ref.current.scrollIntoView({ behavior: 'smooth' })
  }, [isSelected])

  return (
    <Link
      ref={ref}
      unstyled
      href="#"
      onClick={!item.disabled ? onClick : undefined}
      display="flex"
      alignItems="center"
      justifyContent="center"
      fontSize="sm"
      fontWeight="medium"
      color={getTabTextColor()}
      minWidth={100}
      height="100%"
      boxShadow={`inset 0 ${isSelected ? -2 : 0}px 0 0 ${borderColor}`}
      paddingX={4}
      flexShrink={0}
      cursor={item.disabled ? 'disabled' : 'pointer'}
    >
      {item.label}
    </Link>
  )
}
