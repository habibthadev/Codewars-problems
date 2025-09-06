  
  const result = [];
  
  for (let i = 0; i < encoded.length; i += 4) {
    const a = lookup[encoded[i]] || 0;
    const b = lookup[encoded[i + 1]] || 0;
    const c = lookup[encoded[i + 2]] || 0;
    const d = lookup[encoded[i + 3]] || 0;
    
    const bitmap = (a << 18) | (b << 12) | (c << 6) | d;
    
    result.push((bitmap >> 16) & 255);
    
    if (i + 2 < encoded.length) {
      result.push((bitmap >> 8) & 255);
    }
    
    if (i + 3 < encoded.length) {
      result.push(bitmap & 255);
    }
  }
  
  return new Uint8Array(result);
}