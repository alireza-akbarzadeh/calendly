import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(admin)/admin/meeting')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /meeting!'
}
