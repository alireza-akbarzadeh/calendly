import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(admin)/admin/account-settings')({
  component: AccountSettingComponent,
})

function AccountSettingComponent() {
  return 'Hello /(admin)/admin/account-settings!'
}
