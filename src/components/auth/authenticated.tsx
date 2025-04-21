import type { ReactNode } from 'react'

import { useAuthQuery } from '@/services/auth.query'

interface UnAuthenticatedProps {
  children: ReactNode
}

export function Authenticated(props: UnAuthenticatedProps) {
  const { children } = props
  const { data } = useAuthQuery()

  if (data.isAuthenticated) {
    return children
  }
  return null
}
