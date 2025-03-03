export const sum = (first, second) => {
  return first + second;
};

export const sumAll = (arr = []) => {
  return arr.reduce((a, b) => a + b, 0);
};
