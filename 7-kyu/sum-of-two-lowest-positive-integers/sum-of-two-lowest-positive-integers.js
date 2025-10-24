function sumTwoSmallestNumbers(numbers) {  
  // Code here
  
  const numberSorter = numbers => {
    return numbers.sort((a, b) => a - b)
  }
  
  const newArr = numberSorter(numbers);
  
  return newArr[0] + newArr[1]
  
}
​
​