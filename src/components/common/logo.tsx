import type { LinkProps } from '@tanstack/react-router'
import type { ReactNode } from 'react'

import { Image } from '../ui/image'
import { Link } from '../ui/link'
import type { ImageProps } from '../ui/image'

interface LogoProps extends ImageProps {
  to?: LinkProps['to']
  children?: ReactNode
}

export function Logo(props: LogoProps) {
  const { to, children, ...imageProps } = props

  return (
    <Link to={to || '/'} className='flex items-center gap-1.5'>
      <Image {...imageProps} />
      {children}
    </Link>
  )
}
