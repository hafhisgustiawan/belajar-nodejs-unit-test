import { getBalance } from "../src/async";
import { calculate, calculateAndReturn } from "../src/sum";

it("test calculate", () => {
  const callback = jest.fn();

  calculate([10, 10, 10], callback);
  calculate([10, 10, 10, 10, 10], callback);

  expect(callback.mock.calls.length).toBe(2);

  // console.log(callback.mock.calls);

  expect(callback.mock.calls[0][0]).toBe(30);
  expect(callback.mock.calls[1][0]).toBe(50);
});

it("test mock return value", () => {
  const callback = jest.fn();

  //return value one ini akan set result dan tidak akan merubahnya walaupun callback dipanggil
  callback.mockReturnValueOnce(40);
  callback.mockReturnValueOnce(80);

  //disini, walaupun dipanggil dg parameter berbeda dia tidak akan merubah return value nya
  expect(calculateAndReturn([10, 10], callback)).toBe(40); //secara login ini tobe 20, tapi karena mockReturnValueOnce diatas, jadi dia akan selalu return value yang sama
  expect(calculateAndReturn([10, 10, 10, 10], callback)).toBe(80);

  expect(callback.mock.results[0].value).toBe(40);
  expect(callback.mock.results[1].value).toBe(80);

  console.log(callback.mock.calls); //ini return normal dan value actual
  console.log(callback.mock.results); //ini yang akan berpengaruh
});

//dg mockImplementation ini kita bisa memanipulasi return value dari mock function, jadi data nya nanti bisa kita atur

it("test mock implementation", () => {
  const callback = jest.fn();
  //disini kita atur value nya x2 jadi kalo di input 20 maka return value nya 40
  callback.mockImplementation((value) => value * 2);

  expect(calculateAndReturn([10, 10, 10], callback)).toBe(60);
  expect(calculateAndReturn([10, 10, 10, 10, 10], callback)).toBe(100);
});
