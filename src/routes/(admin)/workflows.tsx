import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(admin)/workflows')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /workflows!'
}
