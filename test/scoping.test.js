beforeAll(() => console.log("Before all outer"));
afterAll(() => console.log("After all outer"));
beforeEach(() => console.log("Before each outer"));
afterEach(() => console.log("After each outer"));

test("Test outer", () => console.log("Test outer"));

describe("Inner", () => {
  test("Test inner", () => console.log("Test inner"));
});
