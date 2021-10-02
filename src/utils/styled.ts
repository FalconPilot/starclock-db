export const cssProperty = (k: string, v: string): string => `${k}: ${v};`

export const optionalProperty = (cond: boolean, k: string, v: string) =>
  cond ? cssProperty(k, v) : ''

export const optionalProperties = (cond: boolean, props: [string, string][]): string =>
  props.map(([k, v]) => optionalProperty(cond, k, v)).join('\n')
