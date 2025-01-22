const myIncludes = (arr, item, from = 0) => {
  const adjustedStart = from < 0 ? Math.max(arr.length + from, 0) : Math.min(from, arr.length);

  for (let i = adjustedStart; i < arr.length; i += 1) {
    if (arr[i] === item) return true;
  }

  return false;
}
