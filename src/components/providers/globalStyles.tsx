import * as React from 'react'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: #111;
    color: #FFF;
    font-family: 'Monaco';
  }

  #root {
    height: 100vh;
  }

  button:hover {
    cursor: 'pointer';
  }
  
  *:disabled:hover {
    cursor: 'not-allowed';
  }
`

export const GlobalStylesProvider: React.FunctionComponent = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  )
}
