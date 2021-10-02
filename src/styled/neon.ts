import { css } from 'styled-components'

import { theme } from 'constants/theme'
import { optionalProperty } from 'utils/styled'
import { ThemeColor } from 'types/theme'

export const neonText = (color: string) => css`
  color: ${color};
  text-shadow: 0 0 3px ${color};
`

export const themeNeonText = (color: ThemeColor) =>
  neonText(theme.colors[color])

export const neonBox = (color: string, bg?: boolean) => css`
  border: 1px solid ${color};
  box-shadow: 0 0 5px ${color}, 0 0 5px ${color} inset;
  ${optionalProperty(!!bg, 'background-color', color)}
`

export const themeNeonBox = (color: ThemeColor, bg?: boolean) =>
  neonBox(theme.colors[color], bg)
