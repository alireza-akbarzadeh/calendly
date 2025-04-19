import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(admin)/admin/event-type')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /event-type!'
}
