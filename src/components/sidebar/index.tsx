import * as React from 'react'

import { SidebarState } from './types'
import { SidebarView } from './view'

export const Sidebar: React.FunctionComponent = () => {
  const [state, setState] = React.useState<SidebarState>({
    openedTab: null
  })

  const onCategoryClick = React.useCallback((tabKey: string) => (): void => {
    setState({
      ...state,
      openedTab: state.openedTab === tabKey ? null : tabKey
    })
  }, [setState, state])

  return (
    <SidebarView
      openedTab={state.openedTab}
      onCategoryClick={onCategoryClick}
    />
  )
}
