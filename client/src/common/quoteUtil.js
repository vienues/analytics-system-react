import numeral from 'numeral';

export function formatQuoteChange(change) {
  return numeral(change).format('0,0[.]00');
}

export function formatQuotePercent(percent) {
  return numeral(percent * 100).format('0,0[.]00');
}
