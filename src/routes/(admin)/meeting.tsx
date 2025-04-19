import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(admin)/meeting')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /meeting!'
}
