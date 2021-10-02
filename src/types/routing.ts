import * as React from 'react'

export enum AppRoute {
  Index = '/',
  HumansPage = '/humains',
}

export interface MarkdownRouteOptions {
  type: 'markdown'
  content: string
}

export interface ComponentRouteOptions {
  type: 'component'
  content: React.FunctionComponent
}

export type RoutingOptions =
  | MarkdownRouteOptions
  | ComponentRouteOptions

export type RouterConfig = {
  [k in AppRoute]: RoutingOptions
}

export interface LinkOptions {
  title: string
  to: AppRoute
}

export type SidebarConfig = {
  [k: string]: {
    title: string
    links: LinkOptions[]
  }
}
