import { useTranslations } from 'use-intl'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog'

import { SignInForm } from './signin-form'

export function AuthModal() {
  const t = useTranslations()

  return (
    <Dialog >
      <DialogTrigger asChild>
        <Button>
          {t('common.get-started-today')}
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-md md:max-w-lg'>
        <SignInForm />
      </DialogContent>
    </Dialog>
  )
}
