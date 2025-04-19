import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(admin)/integration-apps')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /integration-apps!'
}
