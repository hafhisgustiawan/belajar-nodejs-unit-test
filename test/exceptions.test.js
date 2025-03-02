import { callMe, MyExceptions } from "../src/exception";

test("Exceptions", () => {
  //ketika menggunakan exception matchers ini wajib menggunakan closure function agar error nya ter-record oleh si function
  expect(() => callMe("Hafhis")).toThrow();
  expect(() => callMe("Hafhis")).toThrow(MyExceptions);
  expect(() => callMe("Hafhis")).toThrow("Ups my exception happen");
});
