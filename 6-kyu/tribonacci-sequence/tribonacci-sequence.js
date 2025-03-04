function tribonacci(signature, n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    if (i < 3) {
      result.push(signature[i]);
    } else {
      result.push(result[i - 1] + result[i - 2] + result[i - 3]);
    }
  }
  return result
}