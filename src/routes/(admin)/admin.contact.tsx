import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(admin)/admin/contact')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /contact!'
}
