import { sayHelloAsync } from "../src/async";

test("Test async function", async () => {
  // resolve ini matchers async yang harapannya dia tidak error, sebaliknya dg reject
  await expect(sayHelloAsync("Hafhis")).resolves.toBe("Hello Hafhis");
  await expect(sayHelloAsync()).rejects.toBe("Name is empty");
});
