import { LuCheck, LuEllipsis, LuLanguages } from 'react-icons/lu'
import { useTranslations } from 'use-intl'

import { languageOptions, themeOptions } from '@/config/sidebar'
import { useIsMobile } from '@/hooks/use-is-mobile'
import { usePreferenceQuery, useUpdatePreferenceMutation } from '@/services/preference.query'

import { AuthModal } from '../auth'
import { UnAuthenticated } from '../auth/un-authenticated'
import { UserMenu } from '../common'
import { Logo } from '../common/logo'
import { useTheme } from '../theme'
import { Button } from '../ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { TwemojiFlag } from '../ui/twemoji'
import { Typography } from '../ui/typography'

export function Header() {
  const t = useTranslations()
  const theme = useTheme()
  const isMobile = useIsMobile()
  const preferenceQuery = usePreferenceQuery()
  const updatePreferenceMutation = useUpdatePreferenceMutation()

  return (
    <header className='mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8'>
      <div className='flex items-center'>
        <Logo
          src='/png/logo.png'
          alt='Logo'
          className='size-10 gap-0'
          priority
        >
          <Typography.H4>
            Cal
            <Typography.S className='bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent'>
              endly
            </Typography.S>
          </Typography.H4>
        </Logo>
      </div>
      <div className='flex items-center gap-2'>
        <UserMenu />
        <UnAuthenticated>
          <AuthModal />
        </UnAuthenticated>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' size='icon' title={t('sidebar.language')}>
              <LuLanguages />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side={!isMobile ? 'bottom' : 'right'}
            align={!isMobile ? 'end' : 'start'}
            className='min-w-56 rounded-lg'
          >
            {languageOptions.map(({ locale, countryCode, label }) => (
              <DropdownMenuItem
                key={locale}
                onClick={() => updatePreferenceMutation.mutate({ data: { locale } })}
              >
                <TwemojiFlag countryCode={countryCode} />
                {label}
                {preferenceQuery.data.locale === locale && <LuCheck className='ml-auto' />}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' size='icon'>
              <LuEllipsis />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side={!isMobile ? 'bottom' : 'right'}
            align={!isMobile ? 'end' : 'start'}
            className='min-w-56 rounded-lg'
          >
            {themeOptions.map(({ value, Icon }) => (
              <DropdownMenuItem key={value} onClick={() => theme.set(value)}>
                <Icon />
                {t(`sidebar.${value}`)}
                {theme.value === value && <LuCheck className='ml-auto' />}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
