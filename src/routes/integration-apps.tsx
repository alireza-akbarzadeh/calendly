import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/integration-apps')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /integration-apps!'
}
