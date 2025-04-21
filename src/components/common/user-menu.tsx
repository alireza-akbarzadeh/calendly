import { authClient } from '@/libs/auth-client'
import { useAuthedQuery } from '@/services/auth.query'

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

export function UserMenu() {
  const { data } = useAuthedQuery()
  const handleSignOut = async () => {
    await authClient.signOut()
  }
  if (data.isAuthenticated)
    return (
      <Authenticated>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='relative size-10 rounded-full'>
              <Avatar className='size-9 border border-border'>
                {data.user.image ? (
                  <AvatarImage src={data.user.image} alt={data.user.name || 'User avatar'} />
                ) : (
                  <AvatarFallback className='text-xs font-medium'>
                    {data.user.name ? data.user.name.slice(0, 2).toUpperCase() : 'U'}
                  </AvatarFallback>
                )}
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-56' align='end' forceMount>
            <DropdownMenuLabel className='font-normal'>
              <div className='flex flex-col space-y-1'>
                <p className='text-sm font-medium leading-none'>{data.user.name || 'User'}</p>
                <p className='text-xs leading-none text-muted-foreground'>{data.user.email || ''}</p>
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
