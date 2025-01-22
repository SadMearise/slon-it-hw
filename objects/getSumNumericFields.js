const getSumNumericFields = (object) => {
  return Object.values(object).reduce((accumulator, currentValue) => {
    return typeof currentValue === "number" ? accumulator + currentValue : accumulator;
  }, 0);
}
