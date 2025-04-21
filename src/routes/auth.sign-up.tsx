import { createFileRoute } from '@tanstack/react-router'
import { useTranslations } from 'use-intl'

import { SignUpForm } from '@/components/auth/signup-form'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Link } from '@/components/ui/link'

export const Route = createFileRoute('/auth/sign-up')({
  component: SignUpRoute,
})

function SignUpRoute() {
  const t = useTranslations()

  return (
    <Card className='w-full lg:max-w-md'>
      <CardHeader>
        <CardTitle>{t('auth.sign-up')}</CardTitle>
        <CardDescription>{t('auth.sign-up-description')}</CardDescription>
      </CardHeader>
      <CardContent className='space-y-6'>
        <SignUpForm />
        <div className='flex items-center justify-center gap-2'>
          <p>{t('auth.already-have-an-account')}</p>
          <Button asChild variant='link' className='h-auto p-0 text-base'>
            <Link to='/auth/sign-in'>{t('auth.sign-in')}</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
