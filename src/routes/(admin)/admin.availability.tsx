import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(admin)/admin/availability')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /availability!'
}
