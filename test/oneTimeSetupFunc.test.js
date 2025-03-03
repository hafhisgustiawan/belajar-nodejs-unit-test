import { sum } from "../src/sum.js";
// beforeAll(function) - function akan di eksekusi sekali sebelum semua unit test berjalan di file unit test

//afterAll(function) - sama aja tapi ini setelah nya

beforeAll(() => {
  console.log("Before all");
});

afterAll(() => {
  console.log("After all");
});

test("Test first", () => {
  expect(sum(10, 10)).toBe(20);
});

test("Test first", () => {
  expect(sum(5, 10)).toBe(15);
});
