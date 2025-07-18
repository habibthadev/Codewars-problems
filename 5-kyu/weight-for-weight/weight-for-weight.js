function orderWeight(str) {
  return str
    .trim()
    .split(/\s+/) // Split on any whitespace
    .sort((a, b) => {
      const weightA = [...a].reduce((sum, digit) => sum + Number(digit), 0);
      const weightB = [...b].reduce((sum, digit) => sum + Number(digit), 0);
​
      if (weightA === weightB) {
        return a.localeCompare(b); // Lexical comparison
      }
      return weightA - weightB;
    })
    .join(' ');
}