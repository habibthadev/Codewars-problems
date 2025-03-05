function createPhoneNumber(numbers) {
  let firstNums = numbers.slice(0, 3);
  let secondNums = numbers.slice(3, 6);
  let lastNums = numbers.slice(6, 11);
​
  let number = "(";
  for (let i = 0; i < firstNums.length; i++) {
    number += firstNums[i];
  }
  number += ") ";
  for (let i = 0; i < secondNums.length; i++) {
    number += secondNums[i];
  }
  number += "-";
  for (let i = 0; i < lastNums.length; i++) {
    number += lastNums[i];
  }
  return number;
}