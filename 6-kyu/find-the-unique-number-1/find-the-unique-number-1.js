const checkUnique = (arr) => {
  let i = 0;
  while (i < arr.length) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
      return arr[i];
    }
    i++;
  }
};
​
function findUniq(arr) {
  return checkUnique(arr);
}