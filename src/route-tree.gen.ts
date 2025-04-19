/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AuthImport } from './routes/auth'
import { Route as IndexImport } from './routes/index'
import { Route as AuthSignUpImport } from './routes/auth.sign-up'
import { Route as AuthSignInImport } from './routes/auth.sign-in'
import { Route as userUserImport } from './routes/(user)/user'
import { Route as adminAdminImport } from './routes/(admin)/admin'
import { Route as userUserEmailVerificationImport } from './routes/(user)/user.email-verification'
import { Route as userUserChangePasswordImport } from './routes/(user)/user.change-password'
import { Route as userUserChangeEmailImport } from './routes/(user)/user.change-email'
import { Route as userUserAccountSettingsImport } from './routes/(user)/user.account-settings'
import { Route as adminAdminWorkflowsImport } from './routes/(admin)/admin.workflows'
import { Route as adminAdminUserManagementImport } from './routes/(admin)/admin.user-management'
import { Route as adminAdminUpgradePlanImport } from './routes/(admin)/admin.upgrade-plan'
import { Route as adminAdminRoutingImport } from './routes/(admin)/admin.routing'
import { Route as adminAdminMeetingImport } from './routes/(admin)/admin.meeting'
import { Route as adminAdminIntegrationAppsImport } from './routes/(admin)/admin.integration-apps'
import { Route as adminAdminEventTypeImport } from './routes/(admin)/admin.event-type'
import { Route as adminAdminContactImport } from './routes/(admin)/admin.contact'
import { Route as adminAdminAvailabilityImport } from './routes/(admin)/admin.availability'
import { Route as adminAdminAnalyticsImport } from './routes/(admin)/admin.analytics'
import { Route as adminAdminAdminCenterImport } from './routes/(admin)/admin.admin-center'

// Create/Update Routes

const AuthRoute = AuthImport.update({
  id: '/auth',
  path: '/auth',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AuthSignUpRoute = AuthSignUpImport.update({
  id: '/sign-up',
  path: '/sign-up',
  getParentRoute: () => AuthRoute,
} as any)

const AuthSignInRoute = AuthSignInImport.update({
  id: '/sign-in',
  path: '/sign-in',
  getParentRoute: () => AuthRoute,
} as any)

const userUserRoute = userUserImport.update({
  id: '/(user)/user',
  path: '/user',
  getParentRoute: () => rootRoute,
} as any)

const adminAdminRoute = adminAdminImport.update({
  id: '/(admin)/admin',
  path: '/admin',
  getParentRoute: () => rootRoute,
} as any)

const userUserEmailVerificationRoute = userUserEmailVerificationImport.update({
  id: '/email-verification',
  path: '/email-verification',
  getParentRoute: () => userUserRoute,
} as any)

const userUserChangePasswordRoute = userUserChangePasswordImport.update({
  id: '/change-password',
  path: '/change-password',
  getParentRoute: () => userUserRoute,
} as any)

const userUserChangeEmailRoute = userUserChangeEmailImport.update({
  id: '/change-email',
  path: '/change-email',
  getParentRoute: () => userUserRoute,
} as any)

const userUserAccountSettingsRoute = userUserAccountSettingsImport.update({
  id: '/account-settings',
  path: '/account-settings',
  getParentRoute: () => userUserRoute,
} as any)

const adminAdminWorkflowsRoute = adminAdminWorkflowsImport.update({
  id: '/workflows',
  path: '/workflows',
  getParentRoute: () => adminAdminRoute,
} as any)

const adminAdminUserManagementRoute = adminAdminUserManagementImport.update({
  id: '/user-management',
  path: '/user-management',
  getParentRoute: () => adminAdminRoute,
} as any)

const adminAdminUpgradePlanRoute = adminAdminUpgradePlanImport.update({
  id: '/upgrade-plan',
  path: '/upgrade-plan',
  getParentRoute: () => adminAdminRoute,
} as any)

const adminAdminRoutingRoute = adminAdminRoutingImport.update({
  id: '/routing',
  path: '/routing',
  getParentRoute: () => adminAdminRoute,
} as any)

const adminAdminMeetingRoute = adminAdminMeetingImport.update({
  id: '/meeting',
  path: '/meeting',
  getParentRoute: () => adminAdminRoute,
} as any)

const adminAdminIntegrationAppsRoute = adminAdminIntegrationAppsImport.update({
  id: '/integration-apps',
  path: '/integration-apps',
  getParentRoute: () => adminAdminRoute,
} as any)

const adminAdminEventTypeRoute = adminAdminEventTypeImport.update({
  id: '/event-type',
  path: '/event-type',
  getParentRoute: () => adminAdminRoute,
} as any)

const adminAdminContactRoute = adminAdminContactImport.update({
  id: '/contact',
  path: '/contact',
  getParentRoute: () => adminAdminRoute,
} as any)

const adminAdminAvailabilityRoute = adminAdminAvailabilityImport.update({
  id: '/availability',
  path: '/availability',
  getParentRoute: () => adminAdminRoute,
} as any)

const adminAdminAnalyticsRoute = adminAdminAnalyticsImport.update({
  id: '/analytics',
  path: '/analytics',
  getParentRoute: () => adminAdminRoute,
} as any)

const adminAdminAdminCenterRoute = adminAdminAdminCenterImport.update({
  id: '/admin-center',
  path: '/admin-center',
  getParentRoute: () => adminAdminRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/auth': {
      id: '/auth'
      path: '/auth'
      fullPath: '/auth'
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    '/(admin)/admin': {
      id: '/(admin)/admin'
      path: '/admin'
      fullPath: '/admin'
      preLoaderRoute: typeof adminAdminImport
      parentRoute: typeof rootRoute
    }
    '/(user)/user': {
      id: '/(user)/user'
      path: '/user'
      fullPath: '/user'
      preLoaderRoute: typeof userUserImport
      parentRoute: typeof rootRoute
    }
    '/auth/sign-in': {
      id: '/auth/sign-in'
      path: '/sign-in'
      fullPath: '/auth/sign-in'
      preLoaderRoute: typeof AuthSignInImport
      parentRoute: typeof AuthImport
    }
    '/auth/sign-up': {
      id: '/auth/sign-up'
      path: '/sign-up'
      fullPath: '/auth/sign-up'
      preLoaderRoute: typeof AuthSignUpImport
      parentRoute: typeof AuthImport
    }
    '/(admin)/admin/admin-center': {
      id: '/(admin)/admin/admin-center'
      path: '/admin-center'
      fullPath: '/admin/admin-center'
      preLoaderRoute: typeof adminAdminAdminCenterImport
      parentRoute: typeof adminAdminImport
    }
    '/(admin)/admin/analytics': {
      id: '/(admin)/admin/analytics'
      path: '/analytics'
      fullPath: '/admin/analytics'
      preLoaderRoute: typeof adminAdminAnalyticsImport
      parentRoute: typeof adminAdminImport
    }
    '/(admin)/admin/availability': {
      id: '/(admin)/admin/availability'
      path: '/availability'
      fullPath: '/admin/availability'
      preLoaderRoute: typeof adminAdminAvailabilityImport
      parentRoute: typeof adminAdminImport
    }
    '/(admin)/admin/contact': {
      id: '/(admin)/admin/contact'
      path: '/contact'
      fullPath: '/admin/contact'
      preLoaderRoute: typeof adminAdminContactImport
      parentRoute: typeof adminAdminImport
    }
    '/(admin)/admin/event-type': {
      id: '/(admin)/admin/event-type'
      path: '/event-type'
      fullPath: '/admin/event-type'
      preLoaderRoute: typeof adminAdminEventTypeImport
      parentRoute: typeof adminAdminImport
    }
    '/(admin)/admin/integration-apps': {
      id: '/(admin)/admin/integration-apps'
      path: '/integration-apps'
      fullPath: '/admin/integration-apps'
      preLoaderRoute: typeof adminAdminIntegrationAppsImport
      parentRoute: typeof adminAdminImport
    }
    '/(admin)/admin/meeting': {
      id: '/(admin)/admin/meeting'
      path: '/meeting'
      fullPath: '/admin/meeting'
      preLoaderRoute: typeof adminAdminMeetingImport
      parentRoute: typeof adminAdminImport
    }
    '/(admin)/admin/routing': {
      id: '/(admin)/admin/routing'
      path: '/routing'
      fullPath: '/admin/routing'
      preLoaderRoute: typeof adminAdminRoutingImport
      parentRoute: typeof adminAdminImport
    }
    '/(admin)/admin/upgrade-plan': {
      id: '/(admin)/admin/upgrade-plan'
      path: '/upgrade-plan'
      fullPath: '/admin/upgrade-plan'
      preLoaderRoute: typeof adminAdminUpgradePlanImport
      parentRoute: typeof adminAdminImport
    }
    '/(admin)/admin/user-management': {
      id: '/(admin)/admin/user-management'
      path: '/user-management'
      fullPath: '/admin/user-management'
      preLoaderRoute: typeof adminAdminUserManagementImport
      parentRoute: typeof adminAdminImport
    }
    '/(admin)/admin/workflows': {
      id: '/(admin)/admin/workflows'
      path: '/workflows'
      fullPath: '/admin/workflows'
      preLoaderRoute: typeof adminAdminWorkflowsImport
      parentRoute: typeof adminAdminImport
    }
    '/(user)/user/account-settings': {
      id: '/(user)/user/account-settings'
      path: '/account-settings'
      fullPath: '/user/account-settings'
      preLoaderRoute: typeof userUserAccountSettingsImport
      parentRoute: typeof userUserImport
    }
    '/(user)/user/change-email': {
      id: '/(user)/user/change-email'
      path: '/change-email'
      fullPath: '/user/change-email'
      preLoaderRoute: typeof userUserChangeEmailImport
      parentRoute: typeof userUserImport
    }
    '/(user)/user/change-password': {
      id: '/(user)/user/change-password'
      path: '/change-password'
      fullPath: '/user/change-password'
      preLoaderRoute: typeof userUserChangePasswordImport
      parentRoute: typeof userUserImport
    }
    '/(user)/user/email-verification': {
      id: '/(user)/user/email-verification'
      path: '/email-verification'
      fullPath: '/user/email-verification'
      preLoaderRoute: typeof userUserEmailVerificationImport
      parentRoute: typeof userUserImport
    }
  }
}

// Create and export the route tree

interface AuthRouteChildren {
  AuthSignInRoute: typeof AuthSignInRoute
  AuthSignUpRoute: typeof AuthSignUpRoute
}

const AuthRouteChildren: AuthRouteChildren = {
  AuthSignInRoute: AuthSignInRoute,
  AuthSignUpRoute: AuthSignUpRoute,
}

const AuthRouteWithChildren = AuthRoute._addFileChildren(AuthRouteChildren)

interface adminAdminRouteChildren {
  adminAdminAdminCenterRoute: typeof adminAdminAdminCenterRoute
  adminAdminAnalyticsRoute: typeof adminAdminAnalyticsRoute
  adminAdminAvailabilityRoute: typeof adminAdminAvailabilityRoute
  adminAdminContactRoute: typeof adminAdminContactRoute
  adminAdminEventTypeRoute: typeof adminAdminEventTypeRoute
  adminAdminIntegrationAppsRoute: typeof adminAdminIntegrationAppsRoute
  adminAdminMeetingRoute: typeof adminAdminMeetingRoute
  adminAdminRoutingRoute: typeof adminAdminRoutingRoute
  adminAdminUpgradePlanRoute: typeof adminAdminUpgradePlanRoute
  adminAdminUserManagementRoute: typeof adminAdminUserManagementRoute
  adminAdminWorkflowsRoute: typeof adminAdminWorkflowsRoute
}

const adminAdminRouteChildren: adminAdminRouteChildren = {
  adminAdminAdminCenterRoute: adminAdminAdminCenterRoute,
  adminAdminAnalyticsRoute: adminAdminAnalyticsRoute,
  adminAdminAvailabilityRoute: adminAdminAvailabilityRoute,
  adminAdminContactRoute: adminAdminContactRoute,
  adminAdminEventTypeRoute: adminAdminEventTypeRoute,
  adminAdminIntegrationAppsRoute: adminAdminIntegrationAppsRoute,
  adminAdminMeetingRoute: adminAdminMeetingRoute,
  adminAdminRoutingRoute: adminAdminRoutingRoute,
  adminAdminUpgradePlanRoute: adminAdminUpgradePlanRoute,
  adminAdminUserManagementRoute: adminAdminUserManagementRoute,
  adminAdminWorkflowsRoute: adminAdminWorkflowsRoute,
}

const adminAdminRouteWithChildren = adminAdminRoute._addFileChildren(
  adminAdminRouteChildren,
)

interface userUserRouteChildren {
  userUserAccountSettingsRoute: typeof userUserAccountSettingsRoute
  userUserChangeEmailRoute: typeof userUserChangeEmailRoute
  userUserChangePasswordRoute: typeof userUserChangePasswordRoute
  userUserEmailVerificationRoute: typeof userUserEmailVerificationRoute
}

const userUserRouteChildren: userUserRouteChildren = {
  userUserAccountSettingsRoute: userUserAccountSettingsRoute,
  userUserChangeEmailRoute: userUserChangeEmailRoute,
  userUserChangePasswordRoute: userUserChangePasswordRoute,
  userUserEmailVerificationRoute: userUserEmailVerificationRoute,
}

const userUserRouteWithChildren = userUserRoute._addFileChildren(
  userUserRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/auth': typeof AuthRouteWithChildren
  '/admin': typeof adminAdminRouteWithChildren
  '/user': typeof userUserRouteWithChildren
  '/auth/sign-in': typeof AuthSignInRoute
  '/auth/sign-up': typeof AuthSignUpRoute
  '/admin/admin-center': typeof adminAdminAdminCenterRoute
  '/admin/analytics': typeof adminAdminAnalyticsRoute
  '/admin/availability': typeof adminAdminAvailabilityRoute
  '/admin/contact': typeof adminAdminContactRoute
  '/admin/event-type': typeof adminAdminEventTypeRoute
  '/admin/integration-apps': typeof adminAdminIntegrationAppsRoute
  '/admin/meeting': typeof adminAdminMeetingRoute
  '/admin/routing': typeof adminAdminRoutingRoute
  '/admin/upgrade-plan': typeof adminAdminUpgradePlanRoute
  '/admin/user-management': typeof adminAdminUserManagementRoute
  '/admin/workflows': typeof adminAdminWorkflowsRoute
  '/user/account-settings': typeof userUserAccountSettingsRoute
  '/user/change-email': typeof userUserChangeEmailRoute
  '/user/change-password': typeof userUserChangePasswordRoute
  '/user/email-verification': typeof userUserEmailVerificationRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/auth': typeof AuthRouteWithChildren
  '/admin': typeof adminAdminRouteWithChildren
  '/user': typeof userUserRouteWithChildren
  '/auth/sign-in': typeof AuthSignInRoute
  '/auth/sign-up': typeof AuthSignUpRoute
  '/admin/admin-center': typeof adminAdminAdminCenterRoute
  '/admin/analytics': typeof adminAdminAnalyticsRoute
  '/admin/availability': typeof adminAdminAvailabilityRoute
  '/admin/contact': typeof adminAdminContactRoute
  '/admin/event-type': typeof adminAdminEventTypeRoute
  '/admin/integration-apps': typeof adminAdminIntegrationAppsRoute
  '/admin/meeting': typeof adminAdminMeetingRoute
  '/admin/routing': typeof adminAdminRoutingRoute
  '/admin/upgrade-plan': typeof adminAdminUpgradePlanRoute
  '/admin/user-management': typeof adminAdminUserManagementRoute
  '/admin/workflows': typeof adminAdminWorkflowsRoute
  '/user/account-settings': typeof userUserAccountSettingsRoute
  '/user/change-email': typeof userUserChangeEmailRoute
  '/user/change-password': typeof userUserChangePasswordRoute
  '/user/email-verification': typeof userUserEmailVerificationRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/auth': typeof AuthRouteWithChildren
  '/(admin)/admin': typeof adminAdminRouteWithChildren
  '/(user)/user': typeof userUserRouteWithChildren
  '/auth/sign-in': typeof AuthSignInRoute
  '/auth/sign-up': typeof AuthSignUpRoute
  '/(admin)/admin/admin-center': typeof adminAdminAdminCenterRoute
  '/(admin)/admin/analytics': typeof adminAdminAnalyticsRoute
  '/(admin)/admin/availability': typeof adminAdminAvailabilityRoute
  '/(admin)/admin/contact': typeof adminAdminContactRoute
  '/(admin)/admin/event-type': typeof adminAdminEventTypeRoute
  '/(admin)/admin/integration-apps': typeof adminAdminIntegrationAppsRoute
  '/(admin)/admin/meeting': typeof adminAdminMeetingRoute
  '/(admin)/admin/routing': typeof adminAdminRoutingRoute
  '/(admin)/admin/upgrade-plan': typeof adminAdminUpgradePlanRoute
  '/(admin)/admin/user-management': typeof adminAdminUserManagementRoute
  '/(admin)/admin/workflows': typeof adminAdminWorkflowsRoute
  '/(user)/user/account-settings': typeof userUserAccountSettingsRoute
  '/(user)/user/change-email': typeof userUserChangeEmailRoute
  '/(user)/user/change-password': typeof userUserChangePasswordRoute
  '/(user)/user/email-verification': typeof userUserEmailVerificationRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/auth'
    | '/admin'
    | '/user'
    | '/auth/sign-in'
    | '/auth/sign-up'
    | '/admin/admin-center'
    | '/admin/analytics'
    | '/admin/availability'
    | '/admin/contact'
    | '/admin/event-type'
    | '/admin/integration-apps'
    | '/admin/meeting'
    | '/admin/routing'
    | '/admin/upgrade-plan'
    | '/admin/user-management'
    | '/admin/workflows'
    | '/user/account-settings'
    | '/user/change-email'
    | '/user/change-password'
    | '/user/email-verification'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/auth'
    | '/admin'
    | '/user'
    | '/auth/sign-in'
    | '/auth/sign-up'
    | '/admin/admin-center'
    | '/admin/analytics'
    | '/admin/availability'
    | '/admin/contact'
    | '/admin/event-type'
    | '/admin/integration-apps'
    | '/admin/meeting'
    | '/admin/routing'
    | '/admin/upgrade-plan'
    | '/admin/user-management'
    | '/admin/workflows'
    | '/user/account-settings'
    | '/user/change-email'
    | '/user/change-password'
    | '/user/email-verification'
  id:
    | '__root__'
    | '/'
    | '/auth'
    | '/(admin)/admin'
    | '/(user)/user'
    | '/auth/sign-in'
    | '/auth/sign-up'
    | '/(admin)/admin/admin-center'
    | '/(admin)/admin/analytics'
    | '/(admin)/admin/availability'
    | '/(admin)/admin/contact'
    | '/(admin)/admin/event-type'
    | '/(admin)/admin/integration-apps'
    | '/(admin)/admin/meeting'
    | '/(admin)/admin/routing'
    | '/(admin)/admin/upgrade-plan'
    | '/(admin)/admin/user-management'
    | '/(admin)/admin/workflows'
    | '/(user)/user/account-settings'
    | '/(user)/user/change-email'
    | '/(user)/user/change-password'
    | '/(user)/user/email-verification'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AuthRoute: typeof AuthRouteWithChildren
  adminAdminRoute: typeof adminAdminRouteWithChildren
  userUserRoute: typeof userUserRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AuthRoute: AuthRouteWithChildren,
  adminAdminRoute: adminAdminRouteWithChildren,
  userUserRoute: userUserRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/auth",
        "/(admin)/admin",
        "/(user)/user"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/auth": {
      "filePath": "auth.tsx",
      "children": [
        "/auth/sign-in",
        "/auth/sign-up"
      ]
    },
    "/(admin)/admin": {
      "filePath": "(admin)/admin.tsx",
      "children": [
        "/(admin)/admin/admin-center",
        "/(admin)/admin/analytics",
        "/(admin)/admin/availability",
        "/(admin)/admin/contact",
        "/(admin)/admin/event-type",
        "/(admin)/admin/integration-apps",
        "/(admin)/admin/meeting",
        "/(admin)/admin/routing",
        "/(admin)/admin/upgrade-plan",
        "/(admin)/admin/user-management",
        "/(admin)/admin/workflows"
      ]
    },
    "/(user)/user": {
      "filePath": "(user)/user.tsx",
      "children": [
        "/(user)/user/account-settings",
        "/(user)/user/change-email",
        "/(user)/user/change-password",
        "/(user)/user/email-verification"
      ]
    },
    "/auth/sign-in": {
      "filePath": "auth.sign-in.tsx",
      "parent": "/auth"
    },
    "/auth/sign-up": {
      "filePath": "auth.sign-up.tsx",
      "parent": "/auth"
    },
    "/(admin)/admin/admin-center": {
      "filePath": "(admin)/admin.admin-center.tsx",
      "parent": "/(admin)/admin"
    },
    "/(admin)/admin/analytics": {
      "filePath": "(admin)/admin.analytics.tsx",
      "parent": "/(admin)/admin"
    },
    "/(admin)/admin/availability": {
      "filePath": "(admin)/admin.availability.tsx",
      "parent": "/(admin)/admin"
    },
    "/(admin)/admin/contact": {
      "filePath": "(admin)/admin.contact.tsx",
      "parent": "/(admin)/admin"
    },
    "/(admin)/admin/event-type": {
      "filePath": "(admin)/admin.event-type.tsx",
      "parent": "/(admin)/admin"
    },
    "/(admin)/admin/integration-apps": {
      "filePath": "(admin)/admin.integration-apps.tsx",
      "parent": "/(admin)/admin"
    },
    "/(admin)/admin/meeting": {
      "filePath": "(admin)/admin.meeting.tsx",
      "parent": "/(admin)/admin"
    },
    "/(admin)/admin/routing": {
      "filePath": "(admin)/admin.routing.tsx",
      "parent": "/(admin)/admin"
    },
    "/(admin)/admin/upgrade-plan": {
      "filePath": "(admin)/admin.upgrade-plan.tsx",
      "parent": "/(admin)/admin"
    },
    "/(admin)/admin/user-management": {
      "filePath": "(admin)/admin.user-management.tsx",
      "parent": "/(admin)/admin"
    },
    "/(admin)/admin/workflows": {
      "filePath": "(admin)/admin.workflows.tsx",
      "parent": "/(admin)/admin"
    },
    "/(user)/user/account-settings": {
      "filePath": "(user)/user.account-settings.tsx",
      "parent": "/(user)/user"
    },
    "/(user)/user/change-email": {
      "filePath": "(user)/user.change-email.tsx",
      "parent": "/(user)/user"
    },
    "/(user)/user/change-password": {
      "filePath": "(user)/user.change-password.tsx",
      "parent": "/(user)/user"
    },
    "/(user)/user/email-verification": {
      "filePath": "(user)/user.email-verification.tsx",
      "parent": "/(user)/user"
    }
  }
}
ROUTE_MANIFEST_END */
