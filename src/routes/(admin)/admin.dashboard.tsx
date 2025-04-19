import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SidebarInset, SidebarProvider } from "~/components/ui/sidebar";
import { AppSidebar } from "~/components/layout/app-sidebar";
import { AppHeader } from "~/components/layout/app-header";

export const Route = createFileRoute("/(admin)/admin/dashboard")({
  component: DashboardRoute,
});

function DashboardRoute() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="flex h-full flex-col">
          <AppHeader />
          <div className="flex h-full flex-1 flex-col items-center px-4">
            <Outlet />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
