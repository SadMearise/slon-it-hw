const getSortedNumericFields = (object) => {
  return Object.entries(object)
    .filter(([, value]) => typeof value === "number")
    .sort(([, valueA], [, valueB]) => valueB - valueA)
    .map(([key, ]) => key);
}
