import type { ReactNode } from 'react'

import { useAuthedQuery } from '@/services/auth.query'

interface UnAuthenticatedProps {
  children: ReactNode
}

export function Authenticated(props: UnAuthenticatedProps) {
  const { children } = props
  const { data } = useAuthedQuery()

  if (data.user.id) {
    return children
  }
  return null
}
