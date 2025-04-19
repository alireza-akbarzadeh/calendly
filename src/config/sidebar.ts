import { AiOutlineDollarCircle } from 'react-icons/ai'
import { LuCalendarDays, LuClock4, LuKeyRound, LuLaptop, LuLink, LuMoon, LuRoute, LuSun, LuWorkflow } from 'react-icons/lu'
import { RiApps2Line } from 'react-icons/ri'
import { TbDeviceDesktopAnalytics } from 'react-icons/tb'
import type { IconType } from 'react-icons'
import type { Country } from 'react-phone-number-input'

import type { Theme } from '~/components/theme'
import type { ValidLink } from '~/components/ui/link'
import type { Locale, TranslateKeys } from '~/libs/i18n'

export interface LanguageOption {
  locale: Locale
  countryCode: Country
  label: string
}

export const languageOptions: readonly LanguageOption[] = [
  { locale: 'en', countryCode: 'US', label: 'English' },
  { locale: 'zh-tw', countryCode: 'TW', label: '繁體中文' },
]

export interface ThemeOption {
  value: Theme
  Icon: IconType
}

export const themeOptions: readonly ThemeOption[] = [
  { value: 'system', Icon: LuLaptop },
  { value: 'light', Icon: LuSun },
  { value: 'dark', Icon: LuMoon },
]

type NavigationType = {
  name: TranslateKeys
  link: ValidLink
  icon: IconType
}

export const navigation: NavigationType[] = [
  {
    name: 'navigation.event-type',
    link: '/event-type',
    icon: LuLink,
  },
  {
    name: 'navigation.meeting',
    link: '/meeting',
    icon: LuCalendarDays,
  },
  {
    name: 'navigation.availability',
    link: '/availability',
    icon: LuClock4,
  },
  {
    name: 'navigation.workflows',
    link: '/workflows',
    icon: LuWorkflow,
  },
  {
    name: 'navigation.integration-apps',
    link: '/integration-apps',
    icon: RiApps2Line,
  },
  {
    name: 'navigation.contact',
    link: '/contact',
    icon: LuKeyRound,
  },
  {
    name: 'navigation.routing',
    link: '/routing',
    icon: LuRoute,
  },
  {
    name: 'navigation.admin-center',
    link: '/admin-center',
    icon: LuKeyRound,
  },
  {
    name: 'navigation.upgrade-plan',
    link: '/admin-center',
    icon: AiOutlineDollarCircle,
  },
  {
    name: 'navigation.analytics',
    link: '/analytics',
    icon: TbDeviceDesktopAnalytics,
  },
]
