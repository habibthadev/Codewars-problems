function inArray(array1, array2) {
  let newArr = [];
​
  for (let a2 of array2) {
    for (let a1 of array1) {
      if (a2.includes(a1)) {
        newArr.push(a1); 
      }
    }
  }
​
  return [...new Set(newArr)].sort();
}