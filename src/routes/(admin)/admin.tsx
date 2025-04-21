import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
import { toast } from 'sonner'

import { AppHeader } from '@/components/layout/app-header'
import { AppSidebar } from '@/components/layout/app-sidebar'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { logger } from '@/libs/logger'
import { useAuthQuery } from '@/services/auth.query'

export const Route = createFileRoute('/(admin)/admin')({
  beforeLoad: ({ context, location, preload }) => {
    if (!context.auth.isAuthenticated) {
      if (!preload) {
        logger.info('Authentication failed, redirecting to sign-in page')
        toast.error(context.translator('auth.authentication-failed'))
      }

      throw redirect({
        to: '/auth/sign-in',
        search: {
          callbackURL: location.pathname,
        },
      })
    }
    // if (context.auth.user.role !== "admin") {
    //   if (!preload) {
    //     logger.info("Unauthorized access, redirecting to home page");
    //     toast.error(context.translator("auth.unauthorized-access"));
    //   }
    //
    //   throw redirect({
    //     to: "/",
    //   });
    // }
  },
  component: AdminLayout,
})

function AdminLayout() {
  const authQuery = useAuthQuery()

  return authQuery.data.isAuthenticated ? (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className='flex h-full flex-col'>
          <AppHeader />
          <div className='flex h-full flex-1 flex-col items-center px-4'>
            <Outlet />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  ) : null
}
