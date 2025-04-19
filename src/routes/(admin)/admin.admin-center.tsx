import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(admin)/admin/admin-center')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /admin-center!'
}
