function rgb(r, g, b) {
  const hex = [r, g, b].map((x) => {
    if (x <= 0) return "00";
    if (x >= 255) return "FF";
    const mapped = x.toString(16).toUpperCase();
    let final = "";
    if (mapped.length < 2) {
      final += `0${mapped}`;
    } else {
      final += mapped
    }
    return final
  });
​
  return hex.join("");
}