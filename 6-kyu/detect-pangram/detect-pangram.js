function isPangram(string){
  if (!string) return false;
​
  const letters = string.toLowerCase().match(/[a-z]/g);
  if (!letters) return false;
​
  const unique = new Set(letters);
  return unique.size === 26;
}