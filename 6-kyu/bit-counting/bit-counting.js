var countBits = function (n) {
  let toBin = n.toString(2);
​
  let count = 0;
  for (each of toBin) {
    if (each === "1") {
      count += 1;
    }
  }
​
  return count;
};