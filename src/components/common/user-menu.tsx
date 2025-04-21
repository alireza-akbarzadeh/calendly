import { authClient } from '@/libs/auth-client'
import { useAuthQuery } from '@/services/auth.query'

import { Authenticated } from '../auth/authenticated'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Typography } from '../ui/typography'

export function UserMenu() {
  const authQuery = useAuthQuery()

  const handleSignOut = async () => {
    await authClient.signOut()
  }
  if (authQuery.data.isAuthenticated )

    return (
      <Authenticated>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='relative size-10 rounded-full'>
              <Avatar className='size-9 border border-border'>
                {authQuery.data?.user?.image ? (
                  <AvatarImage src={authQuery.data?.user?.image} alt={authQuery.data?.user?.name || 'User avatar'} />
                ) : (
                  <AvatarFallback className='text-xs font-medium'>
                    {authQuery.data?.user?.name ? authQuery.data.user.name.slice(0, 2).toUpperCase() : 'U'}
                  </AvatarFallback>
                )}
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-56' align='end' forceMount>
            <DropdownMenuLabel className='font-normal'>
              <div className='flex flex-col space-y-1'>
                <Typography.P className='text-sm font-medium leading-none'>{authQuery.data?.user?.name || 'User'}</Typography.P>
                <Typography.P className='text-xs leading-none text-muted-foreground'>{authQuery.data?.user?.email || ''}</Typography.P>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                Settings
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleSignOut} className='text-red-500 focus:text-red-500'>
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Authenticated>
    )
}
