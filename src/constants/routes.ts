import index from 'pages/index.md'
import humans from 'pages/humans.md'

import {
  AppRoute,
  LinkOptions,
  RouterConfig,
  SidebarConfig
} from 'types/index'

export const routes: RouterConfig = {
  [AppRoute.Index]: {
    type: 'markdown',
    content: index
  },
  [AppRoute.HumansPage]: {
    type: 'markdown',
    content: humans
  }
}

export const rootCategory: LinkOptions[] = [{
  title: 'Accueil',
  to: AppRoute.Index
}]

export const categories: SidebarConfig = {
  races: {
    title: 'Races',
    links: [{
      title: 'Humains',
      to: AppRoute.HumansPage
    }]
  }
}
