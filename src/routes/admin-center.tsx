import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin-center')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /admin-center!'
}
