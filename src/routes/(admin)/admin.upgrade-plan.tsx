import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(admin)/admin/upgrade-plan')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /(admin)/admin/upgrade-plan!'
}
