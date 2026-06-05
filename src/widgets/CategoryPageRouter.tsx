import { usePageRouting } from '@/hooks'
import { NotFoundPage } from '@/pages'
import { ROUTES } from '@/routes'

export const CategoryPageRouter = () => {
  const { category } = usePageRouting()

  const component = ROUTES.find((p) => p.key === category)?.component

  return component ?? <NotFoundPage />
}
