import { createFileRoute } from '@tanstack/react-router'
import { Footer } from 'react-day-picker'

import { Header } from '@/components/sections'

export const Route = createFileRoute('/')({
  component: HomeRoute,
})

function HomeRoute() {
  return (
    <>
      <Header />
      <main className='mx-auto flex h-full max-w-7xl flex-1 flex-col items-center  px-4 sm:px-6 lg:px-8'>
        <section className='flex size-full flex-1 flex-col items-center justify-center space-y-6 pb-16'>
          home
        </section>
      </main>
      <Footer />
    </>
  )
}
