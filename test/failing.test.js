//it.failing() adalah function yang mengekspektasikan akan throwing atau error

import { sayHello } from "../src/sayHello";

it("sayHello success", () => {
  expect(sayHello("Hafhis Gustiawan")).toBe("Hello Hafhis Gustiawan");
});

it.failing("sayHello fail", () => {
  sayHello();
});

// opsi lainnya bisa pakai toThrow() cek exceptions.test.js
