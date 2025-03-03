//concurrent ini memaksa unit test untuk berjalan secara bersamaan dan async, default nya unit test itu berjalan secara satu persatu dan berurutan

import { sayHelloAsync } from "../src/async";

it.concurrent("concurrent 1", async () => {
  await expect(sayHelloAsync("Wahyu Muzakkir")).resolves.toBe(
    "Hello Wahyu Muzakkir"
  );
});

it.concurrent("concurrent 2", async () => {
  await expect(sayHelloAsync("Hafhis Gustiawan")).resolves.toBe(
    "Hello Hafhis Gustiawan"
  );
});

it.concurrent("concurrent 3", async () => {
  await expect(sayHelloAsync("Nurmala Hayati")).resolves.toBe(
    "Hello Nurmala Hayati"
  );
});
