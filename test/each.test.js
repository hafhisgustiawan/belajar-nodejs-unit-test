import { sumAll } from "../src/sum";

describe("Each with array 2 dimension", () => {
  const table = [
    [[10, 10, 10], 30],
    [[10, 10, 10, 10, 10], 50],
    [[10, 10, 10, 10, 10, 10, 10], 70],
  ];

  //each(arr) akan memberikan setiap row pada parameternya, baca doc
  //pada function ujung itu ada dua parameter, itu tergantung per row dia array elemen nya ada berapa

  it.each(table)("test sumAll(%s) should result %i", (numbers, expected) => {
    //numbers ini adalah elemen pertama
    //expected adalah elemen kedua
    expect(sumAll(numbers)).toBe(expected);
  });
});

describe("Each with array of object", () => {
  const table = [
    { numbers: [10, 10, 10], expected: 30 },
    { numbers: [10, 10, 10, 10, 10], expected: 50 },
    { numbers: [10, 10, 10, 10, 10, 10, 10], expected: 70 },
  ];

  it.each(table)(
    "test sumAll($numbers) should result $expected",
    ({ numbers, expected }) => {
      expect(sumAll(numbers)).toBe(expected);
    }
  );
});
