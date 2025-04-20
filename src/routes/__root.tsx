import fontsourceInter from '@fontsource-variable/inter?url'
import fontsourceJetBrainsMono from '@fontsource-variable/jetbrains-mono?url'
import fontsourceNotoSansTC from '@fontsource-variable/noto-sans-tc?url'
import globalStyle from '~/styles/global.css?url'

import {
  createRootRouteWithContext,
  Outlet,
  ScrollRestoration,
} from '@tanstack/react-router'
import { Meta, Scripts } from '@tanstack/start'
import { outdent } from 'outdent'
import { createTranslator, IntlProvider } from 'use-intl'
import type { ErrorComponentProps } from '@tanstack/react-router'
import type { PropsWithChildren } from 'react'

import { Footer, Header } from '~/components/sections'
import { ThemeProvider } from '~/components/theme'
import { Toaster } from '~/components/ui/sonner'
import { Typography } from '~/components/ui/typography'
import { createMetadata } from '~/libs/utils'
import { authQueryOptions } from '~/services/auth.query'
import { i18nQueryOptions, useI18nQuery } from '~/services/i18n.query'
import {
  preferenceQueryOptions,
  usePreferenceQuery,
} from '~/services/preference.query'
import type { RouterContext } from '~/router'

export const Route = createRootRouteWithContext<RouterContext>()({
  beforeLoad: async ({ context }) => {
    const [auth, preference] = await Promise.all([
      context.queryClient.ensureQueryData(authQueryOptions()),
      context.queryClient.ensureQueryData(preferenceQueryOptions()),
    ])

    const i18n = await context.queryClient.ensureQueryData(
      i18nQueryOptions(preference.locale),
    )
    const translator = createTranslator(i18n)

    return {
      auth,
      translator,
    }
  },
  head: () => {
    return {
      meta: createMetadata({
        charSet: 'utf-8',
        viewport: {
          'width': 'device-width',
          'initial-scale': '1',
          'maximum-scale': '1',
          'user-scalable': 'no',
          'viewport-fit': 'cover',
        },
        title: import.meta.env.VITE_APP_NAME,
        description:
          'A fully type-safe boilerplate with a focus on UX and DX, complete with multiple examples.',
        robots: 'index, follow',
      }),
      links: [
        {
          rel: 'icon',
          href: '/favicon.ico',
        },
        {
          rel: 'stylesheet',
          href: globalStyle,
        },
        {
          rel: 'stylesheet',
          href: fontsourceInter,
        },
        {
          rel: 'stylesheet',
          href: fontsourceJetBrainsMono,
        },
        {
          rel: 'stylesheet',
          href: fontsourceNotoSansTC,
        },
      ],
      scripts: import.meta.env.PROD
        ? []
        : [
          {
            type: 'module',
            children: outdent/* js */ `
            import RefreshRuntime from "/_build/@react-refresh"
            RefreshRuntime.injectIntoGlobalHook(window)
            window.$RefreshReg$ = () => {}
            window.$RefreshSig$ = () => (type) => type
          `,
          },
        ],
    }
  },
  component: RootComponent,
  errorComponent: ErrorComponent,
  pendingComponent: PendingComponent,
  notFoundComponent: NotFoundComponent,
})

function RootComponent() {
  return (
    <Document>
      <Header />
      <Outlet />
      <Footer />
    </Document>
  )
}

function PendingComponent() {
  return (
    <div className='space-y-6 p-6'>
      <Typography.H1>Loading...</Typography.H1>
    </div>
  )
}

function ErrorComponent({ error }: ErrorComponentProps) {
  return (
    <Document>
      <div className='space-y-6 p-6'>
        <Typography.H1>Error</Typography.H1>
        <Typography.P className='text-destructive'>{error.message}</Typography.P>
      </div>
    </Document>
  )
}

function NotFoundComponent() {
  return (
    <div className='space-y-6'>
      <Typography.H1>404 Not Found</Typography.H1>
    </div>
  )
}

function Document({ children }: PropsWithChildren) {
  const preferenceQuery = usePreferenceQuery()
  const i18nQuery = useI18nQuery(preferenceQuery.data.locale)

  return (
    <html lang={i18nQuery.data.locale} suppressHydrationWarning>
      <head>
        <title>Calendly</title>
        <Meta />
      </head>
      <body>
        <IntlProvider {...i18nQuery.data}>
          <ThemeProvider>
            {children}
            <Toaster />
          </ThemeProvider>
        </IntlProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}
