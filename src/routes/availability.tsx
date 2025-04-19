import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/availability')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /availability!'
}
