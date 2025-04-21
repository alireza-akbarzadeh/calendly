import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(admin)/admin/profile')({
  component: ProfileComponent,
})

function ProfileComponent() {
  return 'Hello /(admin)/admin/profile!'
}
