import * as React from 'react'

import { GlobalStylesProvider } from './globalStyles'
import { RouterProvider } from './router'

export const Providers: React.FunctionComponent = ({ children }) => {
  return (
    <GlobalStylesProvider>
      <RouterProvider>
        {children}
      </RouterProvider>
    </GlobalStylesProvider>
  )
}
