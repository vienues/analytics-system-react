function toFixed(num, fixed) {
  const re = new RegExp('^-?\\d+(?:.\\d{0,' + (fixed || -1) + '})?');
  return num.toString().match(re)[0];
}

export function formatQuoteChange(change) {
  return toFixed(change, 3);
}

export function formatQuotePercent(percent) {
  return toFixed(percent * 100, 2);
}
