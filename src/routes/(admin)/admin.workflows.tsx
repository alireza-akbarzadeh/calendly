import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(admin)/admin/workflows')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /workflows!'
}
