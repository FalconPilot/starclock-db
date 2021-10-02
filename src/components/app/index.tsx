import * as React from 'react'

import { Providers } from 'components/providers'
import { Router } from 'components/router'
import { Sidebar } from 'components/sidebar'
import { AppWrapper, ContentWrapper } from './styled'

export const App: React.FunctionComponent = () => {
  return (
    <Providers>
      <AppWrapper>
        <Sidebar />
        <ContentWrapper>
          <Router />
        </ContentWrapper>
      </AppWrapper>
    </Providers>
  )
}
