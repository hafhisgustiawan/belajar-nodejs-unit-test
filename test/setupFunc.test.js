import { sum } from "../src/sum.js";

//beforeEach(function) - function yang akan dieksekusi sebelum unit test dijalankan, jika terdapat unit test sebanyak 5 buah dalam sebuah file maka beforeEach() akan di eksekusi sebanyak 5 kali

//afterEach(function) - sama seperti beforeEach() tapi ini setelah unit test dijalankan

beforeEach(() => {
  console.log("Before each");
});

afterEach(() => {
  console.log("After each");
});

test("Test first", () => {
  expect(sum(10, 10)).toBe(20);
});

test("Test first", () => {
  expect(sum(5, 10)).toBe(15);
});
