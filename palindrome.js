/* 
Write a function that checks if a given string (case insensitive) is a palindrome.

A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.
*/

function isPalindrome(x) {
  // your code here
  let pal = [];
  
  x.toLowerCase().split("").forEach(item => {
    pal.unshift(item)
  })
  
  if (x.toLowerCase() == pal.join("")) {
    return true;
  } else {
    return false;
  }
}
