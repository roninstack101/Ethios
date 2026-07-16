import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/* Scrolls back to the top on every route change (hash links keep default behavior). */
function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default ScrollToTop
