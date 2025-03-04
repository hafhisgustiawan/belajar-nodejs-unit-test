export const sum = (first, second) => {
  return first + second;
};

export const sumAll = (arr = []) => {
  return arr.reduce((a, b) => a + b, 0);
};

export const calculate = (numbers = [], callback) => {
  const total = numbers.reduce((a, b) => a + b, 0);
  callback(total);
};

export const calculateAndReturn = (numbers = [], callback) => {
  const total = numbers.reduce((a, b) => a + b, 0);
  return callback(total);
};
