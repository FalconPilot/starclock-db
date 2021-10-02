import styled, { css, keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

import { themeNeonText } from 'styled/neon'

const categoryButtonHeight = 30
const subLinkHeight = 20
const linkMargin = 2

interface CategoryWrapperProps {
  expanded: boolean
  linksAmount: number
}

interface CategoryLinkProps {
  subLink?: boolean
}

export const SidebarWrapper = styled('div')`
  position: relative;
  min-width: 180px;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  padding: 4px;
`

export const CategoryWrapper = styled('div')<CategoryWrapperProps>`
  max-height: ${p => categoryButtonHeight + (
    p.expanded ? (subLinkHeight + linkMargin) * p.linksAmount : 0
  )}px;
  transition: 0.2s;
  overflow: hidden;
`

export const CategoryButton = styled('button')`
  height: ${categoryButtonHeight}px;
`

export const CategoryLink = styled(Link)<CategoryLinkProps>`
  display: block;
  height: ${subLinkHeight}px;
  font-size: 14px;
  margin-top: ${linkMargin}px;

  &, &:active, &:visited {
    text-decoration: none;
    ${themeNeonText('neonPink')}
  }

  ${p => p.subLink && css`
    &:before {
      content: '| ';
    }
  `}
`
