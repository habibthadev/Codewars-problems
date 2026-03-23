function titleCase(title, minorWords) {
  if (!title) return "";
​
  const minorSet = new Set(
    (minorWords || "").toLowerCase().split(" ").filter(Boolean),
  );
​
  const words = title.toLowerCase().split(" ");
  return words
    .map((w, i) => {
      if (w === "") return ""; 
      if (i === 0) {
        return w[0].toUpperCase() + w.slice(1);
      }
      if (minorSet.has(w)) {
        return w;
      }
      return w[0].toUpperCase() + w.slice(1);
    })
    .join(" ");
}