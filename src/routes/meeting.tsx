import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/meeting')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /meeting!'
}
