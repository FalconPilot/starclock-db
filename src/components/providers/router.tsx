import * as React from 'react'

import { BrowserRouter } from 'react-router-dom'

export const RouterProvider: React.FunctionComponent = ({ children }) => {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  )
}
