function narcissistic(value) {
  let strVal = value.toString()
​
  let total = 0
  for (const val of strVal) {
    total += Math.pow(Number(val), strVal.length)
  }
​
  return total === value ? true : false
}