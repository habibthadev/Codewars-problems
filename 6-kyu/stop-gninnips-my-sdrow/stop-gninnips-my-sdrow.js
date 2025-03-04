const reverseWord = str => {
  let reverseStr = '';
​
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
​
  return reverseStr;
};
​
function spinWords(string) {
  let letterArr = string.split(' ');
​
  let newStr = '';
  for (let letter of letterArr) {
    console.log(letter.length);
    const rev = letter.length >= 5 ? reverseWord(letter) : letter;
    newStr = newStr + rev + ' ';
  }
​
  return newStr.trim();
}
​