const duplicateStr = letter => {
  return letter + letter;
};
​
function doubleChar(str) {
  let newWord = ""
  for (letter of str) {
    newWord += duplicateStr(letter)
  }
​
  return newWord
}
​
​