import type { ReactNode } from 'react'

import { useAuthedQuery } from '~/services/auth.query'

interface UnAuthenticatedProps {
  children: ReactNode
}

export function UnAuthenticated(props: UnAuthenticatedProps) {
  const { children } = props
  const { data } = useAuthedQuery()

  if (!data.isAuthenticated) {
    return children
  }
  return null
}
