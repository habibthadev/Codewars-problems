function pickPeaks(arr){
  if (arr.length < 3) {
    return {pos: [], peaks: []};
  }
  
  const pos = [];
  const peaks = [];
  
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i - 1]) {
      let j = i;
      while (j < arr.length - 1 && arr[j] === arr[j + 1]) {
        j++;
      }
      if (j < arr.length - 1 && arr[j] > arr[j + 1]) {
        pos.push(i);
        peaks.push(arr[i]);
      }
      i = j;
    }
  }
  
  return {pos: pos, peaks: peaks};
}