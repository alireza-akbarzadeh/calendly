import { useTranslations } from 'use-intl'

import { Link } from '~/components/ui/link'
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '~/components/ui/sidebar'
import type { navigation } from '~/config/sidebar'

interface SidebarNavBuilderProps {
  navigation: typeof navigation
}

export function SidebarNavBuilder({ navigation }: SidebarNavBuilderProps) {
  const t = useTranslations()

  return (
    <SidebarMenu className='gap-5 pl-3'>
      {navigation.map((nav) => (
        <SidebarMenuItem key={nav.name}>
          <SidebarMenuButton asChild>
            <Link to={nav.link}>
              <nav.icon />
              <span>{t(nav.name)}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}
