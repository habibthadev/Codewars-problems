export function solution(numbers: number[]): number {
  const gcd = (a: number, b: number): number => {
    while (b !== 0) {
      const t = b
      b = a % b
      a = t
    }
    return a
  }
​
  let g = numbers[0]
  for (let i = 1; i < numbers.length; i++) {
    g = gcd(g, numbers[i])
  }
​
  return g * numbers.length
}
​