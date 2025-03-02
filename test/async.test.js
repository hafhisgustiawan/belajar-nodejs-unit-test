import { sayHelloAsync } from "../src/async";

test("Test async function", async () => {
  const result = await sayHelloAsync("Hafhis");
  expect(result).toBe("Hello Hafhis");
});
