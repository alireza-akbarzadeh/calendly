import { createFileRoute } from '@tanstack/react-router'
import { toast } from 'sonner'
import { useTranslations } from 'use-intl'
import { z } from 'zod'

import { useForm } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { authClient } from '@/libs/auth-client'
import { tKey } from '@/libs/i18n'
import { useAuthedQuery } from '@/services/auth.query'
import { emailSchema } from '@/services/auth.schema'

export const Route = createFileRoute('/(user)/user/change-email')({
  component: ChangeEmailRoute,
})

const changeEmailSchema = (t = tKey) =>
  z.object({
    newEmail: emailSchema(t),
  })

function ChangeEmailRoute() {
  const t = useTranslations()

  const authedQuery = useAuthedQuery()

  const form = useForm(
    changeEmailSchema(t).refine(
      (values) => values.newEmail !== authedQuery.data.user.email,
      { path: ['newEmail'], message: t('auth.email-must-different') },
    ),
    {
      defaultValues: {
        newEmail: '',
      },
      onSubmit: async ({ value, formApi }) => {
        await authClient.changeEmail(value, {
          onSuccess: () => {
            toast.success(t('common.submit-success'))
            formApi.reset()
          },
          onError: ({ error }) => {
            toast.error(t('common.submit-error'), {
              description: error.message, // TODO: i18n
            })
          },
        })
      },
    },
  )

  return (
    <form.Root>
      <form.Field
        name="newEmail"
        render={(field) => (
          <field.Container label={t('auth.new-email')}>
            <Input placeholder={authedQuery.data.user.email} />
          </field.Container>
        )}
      />
      <form.Submit>{t('common.submit')}</form.Submit>
    </form.Root>
  )
}
