const mySlice = (arr, start = 0, end = arr.length) => {
  const result = [];

  const adjustedStart = start < 0 ? Math.max(arr.length + start, 0) : Math.min(start, arr.length);
  const adjustedEnd = end < 0 ? Math.max(arr.length + end, 0) : Math.min(end, arr.length);

  for (let i = adjustedStart; i < adjustedEnd; i += 1) {
    result.push(arr[i]);
  }

  return result;
}
