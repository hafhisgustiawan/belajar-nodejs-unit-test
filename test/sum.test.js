import { sum } from "../src/sum";

test("test sum function 1", () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});

test("test sum function 2", () => {
  const result = sum(1, 3);
  expect(result).toBe(4);
});

test("test sum function 3", () => {
  const result = sum(1, 4);
  expect(result).toBe(5);
});
