function calculateSpeed(readingA, readingB) {
  const targetPosA = [
    readingA.position[0] + readingA.distance * Math.cos(readingA.angle),
    readingA.position[1] + readingA.distance * Math.sin(readingA.angle)
  ];
  
  const targetPosB = [
    readingB.position[0] + readingB.distance * Math.cos(readingB.angle),
    readingB.position[1] + readingB.distance * Math.sin(readingB.angle)
  ];
  
  const deltaX = targetPosB[0] - targetPosA[0];
  const deltaY = targetPosB[1] - targetPosA[1];
  const deltaTime = readingB.time - readingA.time;
  
  const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  
  return distance / deltaTime;
}