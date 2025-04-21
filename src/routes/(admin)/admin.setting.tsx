import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(admin)/admin/setting')({
  component: SettingComponent,
})

function SettingComponent() {
  return 'Hello /(admin)/admin/setting!'
}
