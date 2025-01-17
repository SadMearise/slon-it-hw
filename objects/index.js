const getSumNumericFields = (object) => {
  return Object.values(object).reduce((accumulator, currentValue) => {
    return typeof currentValue === "number" ? accumulator + currentValue : accumulator;
  }, 0);
}

const getSortedNumericFields = (object) => {
  return Object.entries(object)
    .filter(([, value]) => typeof value === "number")
    .sort(([, valueA], [, valueB]) => valueB - valueA)
    .map(([key, ]) => key);
}
