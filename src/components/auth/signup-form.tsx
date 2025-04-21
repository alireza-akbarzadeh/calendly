import { toast } from 'sonner'
import { useTranslations } from 'use-intl'
import { z } from 'zod'

import { useForm } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { InputPassword } from '@/components/ui/input-password'
import { authClient } from '@/libs/auth-client'
import { tKey } from '@/libs/i18n'
import {
  emailSchema,
  nameSchema,
  passwordSchema,
  usernameSchema,
} from '@/services/auth.schema'

const signUpSchema = (t = tKey) =>
  z
    .object({
      name: nameSchema(t),
      email: emailSchema(t),
      username: usernameSchema(t),
      password: passwordSchema(t),
      passwordConfirm: passwordSchema(t),
    })
    .refine((values) => values.password === values.passwordConfirm, {
      path: ['passwordConfirm'],
      message: t('auth.password-must-match'),
    })

export function SignUpForm() {
  const t = useTranslations()
  const form = useForm(signUpSchema(t), {
    defaultValues: {
      name: '',
      username: '',
      password: '',
      passwordConfirm: '',
      email: '',
      ...(import.meta.env.DEV && {
        name: 'User',
        username: 'user',
        password: '!Ab12345',
        passwordConfirm: '!Ab12345',
        email: import.meta.env.VITE_APP_EMAIL,
      }),
    },
    onSubmit: async ({ value }) => {
      await authClient.signUp.email(value, {
        onSuccess: () => {
          toast.success(t('auth.sign-up-success'))
        },
        onError: ({ error }) => {
          toast.error(t('auth.sign-up-error'), {
            description: error.message, // TODO: i18n
          })
        },
      })
    },
  })

  return (
    <form.Root className='w-full'>
      <form.Field
        name='name'
        render={(field) => (
          <field.Container label={t('auth.name')}>
            <Input />
          </field.Container>
        )}
      />
      <form.Field
        name='email'
        render={(field) => (
          <field.Container label={t('auth.email')}>
            <Input />
          </field.Container>
        )}
      />
      <form.Field
        name='username'
        render={(field) => (
          <field.Container label={t('auth.username')}>
            <Input />
          </field.Container>
        )}
      />
      <form.Field
        name='password'
        render={(field) => (
          <field.Container label={t('auth.password')}>
            <InputPassword />
          </field.Container>
        )}
      />
      <form.Field
        name='passwordConfirm'
        render={(field) => (
          <field.Container label={t('auth.password-confirm')}>
            <InputPassword />
          </field.Container>
        )}
      />
      <form.Submit>{t('auth.sign-up')}</form.Submit>
    </form.Root>
  )
}
