import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(admin)/admin/analytics')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /analytics!'
}
