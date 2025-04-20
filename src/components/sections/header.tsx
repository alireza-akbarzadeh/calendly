import { UnAuthenticated } from '../auth/un-authenticated'
import { Logo } from '../common/logo'
import { UserMenu } from '../common/user-menu'
import { Button } from '../ui/button'
import { Typography } from '../ui/typography'

export function Header() {

  return (
    <header className='mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8'>
      <div className='flex items-center'>
        <Logo
          src='/png/logo.png'
          alt='Logo'
          className='size-10'
          priority
        >
          <Typography.H4 className=''>
            Cal
            <Typography.S className='bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent'>
              endly
            </Typography.S>
          </Typography.H4>
        </Logo>
      </div>
      <UserMenu />
      <UnAuthenticated>
        <Button>Get Started today</Button>
      </UnAuthenticated>
    </header>
  )
}
