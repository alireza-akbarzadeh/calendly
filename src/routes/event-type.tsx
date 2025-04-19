import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/event-type')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /event-type!'
}
