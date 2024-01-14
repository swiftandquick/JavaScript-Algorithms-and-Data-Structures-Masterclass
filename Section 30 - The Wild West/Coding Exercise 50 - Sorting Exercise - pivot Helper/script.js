function pivot(arr, comparator, start = 0, end = arr.length - 1) {
  let pivotIdx = start,
    pivot = arr[pivotIdx];
  if (typeof comparator !== "function") {
    comparator = (a, b) => a - b;
  }
  for (let i = start + 1; i <= end; i++) {
    if (comparator(pivot, arr[i]) > 0) {
      pivotIdx++;
      [arr[pivotIdx], arr[i]] = [arr[i], arr[pivotIdx]];
    }
  }
  [arr[start], arr[pivotIdx]] = [arr[pivotIdx], arr[start]];
  return pivotIdx;
}
