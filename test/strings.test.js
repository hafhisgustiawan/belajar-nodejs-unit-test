test("strings matchers", () => {
  const name = "Hafhis Gustiawan";

  expect(name).toBe("Hafhis Gustiawan");
  expect(name).toEqual("Hafhis Gustiawan");
  expect(name).toMatch(/awan/); //params nya regex
});
