const multiplyValues = function(value1, value2) {
  return value1 * value2;
}
const divideValues = function(value1, value2) {
  return value1 / value2;
}
const addValues = function(value1, value2) {
  return value1 + value2;
}
const subtractValues = function(value1, value2) {
  return value1 - value2;
}

const operations = {
  multiply: multiplyValues,
  divide: divideValues,
  add: addValues,
  subtract: subtractValues,
}

const calculate = function(value1, value2, operation) {
  return operation(value1, value2);
}
