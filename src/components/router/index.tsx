import * as React from 'react'

import ReactMarkdown from 'react-markdown'
import { Route } from 'react-router'
import { Switch } from 'react-router-dom'

import { routes } from 'constants/index'

export const Router: React.FunctionComponent = () => {
  return (
    <Switch>
      {Object.entries(routes).map(([path, options]) => (
        <Route exact path={path}>
          {options.type === 'markdown'
            ? <ReactMarkdown children={options.content} />
            : <options.content />
          }
        </Route>
      ))}
    </Switch>
  )
}
