import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(admin)/admin/routing')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /routing!'
}
