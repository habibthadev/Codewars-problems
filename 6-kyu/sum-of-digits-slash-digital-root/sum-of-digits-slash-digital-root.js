function digitalRoot(n) {
  if (n < 10) {
    return n;
  } else {
    const sum = n
      .toString()
      .split("")
      .reduce((acc, curr) => acc + parseInt(curr), 0);
    return digitalRoot(sum);
  }
}