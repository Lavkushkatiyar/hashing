function hash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash += Math.abs(str.charCodeAt(i) * str.length);
  }
  return hash % TA;
}
