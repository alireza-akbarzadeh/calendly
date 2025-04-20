import type { LinkProps } from '@tanstack/react-router'

import { Image } from '../ui/image'
import { Link } from '../ui/link'
import type { ImageProps } from '../ui/image'

interface LogoProps extends ImageProps {
  to?: LinkProps['to']
}

export function Logo(props: LogoProps) {
  const { to, ...imageProps } = props

  return (
    <Link to={to || '/'} >
      <Image {...imageProps} />
    </Link>
  )
}
