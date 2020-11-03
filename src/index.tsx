import * as React from 'react'
import * as ReactDOM from 'react-dom'

const rootElementId: string = 'root'
const root: Element | null = document.getElementById(rootElementId)

if (root == null) {
  throw new Error(`Could not find element "${rootElementId}" to inject root node`)
}

ReactDOM.render(<div />, root)
