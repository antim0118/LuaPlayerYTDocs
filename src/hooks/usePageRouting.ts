import { useLocation, useNavigate } from 'react-router-dom'
import { match, compile } from 'path-to-regexp'

export const usePageRouting = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const toPath = compile('/:category{/:page}')

  const matchedPaths = match('/:category{/:page}')(location.pathname)
  const paths = matchedPaths ? matchedPaths.params : {}

  const category = paths.category as string | undefined
  const page = paths.page as string | undefined

  const goToCategory = (category: string) => {
    navigate({ pathname: `/${category}` }, { })
  }

  const goToPage = (page: string) => {
    navigate({ pathname: toPath({ category, page }) })
  }

  return {
    location,
    category, page,
    goToCategory,
    goToPage
  }
}
