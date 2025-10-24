function getAverage(marks){
  let total = 0;
​
  for (let mark of marks) {
    total += mark;
  }
  
  return Math.floor(total / marks.length)
}