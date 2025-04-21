import { TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs'
import { useState } from 'react'
import { useTranslations } from 'use-intl'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog'

import { Tabs } from '../ui/tab'
import { SignInForm } from './signin-form'
import { SignUpForm } from './signup-form'

export function AuthModal() {
  const t = useTranslations()
  const [activeTab, setActiveTab] = useState<'sign-in' | 'sign-up'>('sign-in')

  return (
    <Dialog >
      <DialogTrigger asChild>
        <Button>
          {t('common.get-started-today')}
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-md md:max-w-lg'>
        <Tabs
          value={activeTab}
          onValueChange={(value) => setActiveTab(value as 'sign-in' | 'sign-up')}
          className='w-full'
        >
          <TabsList className='grid w-full grid-cols-2'>
            <TabsTrigger className={`${activeTab === 'sign-in' ? 'border-b-2 border-primary pb-2' : ''}`} value='sign-in'>{t('auth.sign-in')}</TabsTrigger>
            <TabsTrigger
              className={`${activeTab === 'sign-up' ? 'border-b-2 border-primary pb-2' : ''}`}value='sign-up'
            >{t('auth.sign-up')}
            </TabsTrigger>
          </TabsList>
          <TabsContent value='sign-in' className='mt-4 w-full'>
            <SignInForm />
          </TabsContent>
          <TabsContent value='sign-up' className='mt-4 w-full'>
            <SignUpForm />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
