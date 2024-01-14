function getDigit(num, i) {
  return Number(("" + num)[("" + num).length - i - 1]) || 0;
}
