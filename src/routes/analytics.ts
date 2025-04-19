import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/analytics')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /analytics!'
}
