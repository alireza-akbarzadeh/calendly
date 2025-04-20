import { Logo } from '../common/logo'

export function Header() {
  return (
    <header className='flex items-center justify-between py-5'>
      <Logo
        src='/png/logo.png'
        alt='Logo'
        className='size-10'
        priority
      />
    </header>
  )
}
