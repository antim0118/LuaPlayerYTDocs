import { useLocation, useNavigate } from 'react-router-dom'
import { compile, match } from 'path-to-regexp'
import { ROUTES } from '@/routes'

export const usePageRouting = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const toPath = compile('/:category{/:page}')

  const matchedPaths = match('/:category{/:page}')(location.pathname)
  const paths = matchedPaths ? matchedPaths.params : {}

  const category = paths.category as string | undefined
  const page = paths.page as string | undefined

  const currentRoute = ROUTES.find((r) => r.key === category)
  const hideSidebar = currentRoute?.hideSidebar

  const goToCategory = (category: string) => {
    const route = ROUTES.find((r) => r.key === category)
    const defaultPage = typeof route?.defaultPage === 'function' ? route?.defaultPage() : route?.defaultPage

    navigate({ pathname: toPath({ category, page: defaultPage }) }, {})
  }

  const goToPage = (page: string) => {
    navigate({ pathname: toPath({ category, page }) })
  }

  return {
    location,
    category, page,
    hideSidebar,
    goToCategory,
    goToPage
  }
}
