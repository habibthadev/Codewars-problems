function beeramid(bonus, price) {
  if (bonus <= 0 || price <= 0) return 0;
​
  let level = 0;
  let totalCost = 0;
​
  while (true) {
    const cansInLevel = (level + 1) ** 2;
    const costForLevel = cansInLevel * price;
​
    if (totalCost + costForLevel > bonus) {
      break;
    }
​
    totalCost += costForLevel;
    level++;
  }
​
  return level;
}