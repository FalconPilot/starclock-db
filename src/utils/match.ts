export const match = <RT>(
  matchings: Array<{
    cond: boolean
    value: RT
  }>,
  defaultValue: RT
): RT =>
  matchings.find(struct => struct.cond)?.value ?? defaultValue
