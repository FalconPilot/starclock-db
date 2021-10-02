export interface Theme {
  colors: {
    neonPink: string
    neonGreen: string
  }
}

export type ThemeColor = keyof Theme['colors']
