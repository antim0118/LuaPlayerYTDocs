import type { JSX } from 'react'
import { DocsLayout } from '@/components/tabs/Docs/DocsLayout'
import { APILayout } from '@/components/tabs/API/APILayout'

type RouteType = {
  key: string
  label: string
  /** Если попасть по ключу в категорию, в какую страницу редиректить */
  defaultPage?: string | (() => string)
  component?: JSX.Element
  disabled?: boolean
}

export const ROUTES: RouteType[] = [
  {
    key: 'docs',
    label: 'Документация',
    component: <DocsLayout />,
    defaultPage: 'info'
  },
  {
    key: 'api',
    label: 'API',
    component: <APILayout />,
    defaultPage: () => 'buttons'
  },
  {
    key: 'tutorials',
    label: 'Уроки',
    // component: <TutorialsPage />,
    disabled: true,
  },
  {
    key: 'games',
    label: 'Примеры игр',
    // component:
    disabled: true,
  },
] as const
