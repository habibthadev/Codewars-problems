export function arrayDiff(a: number[], b: number[]): number[] {
  const set = new Set(b)
  return a.filter(x => !set.has(x))
}
​