function firstNonRepeatingLetter(s) {
  let arr = s.split("");
  for (var i = 0; i <= arr.length - 1; i++) {
    for (var j = 0; j <= arr.length - 1; j++) {
      if (arr[i].toLowerCase() === arr[j].toLowerCase() && i !== j) {
        break;
      } else if (j === arr.length - 1) {
        return arr[i];
      }
    }
  }
  return ""
}