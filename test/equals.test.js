test("Test toBe()", () => {
  const name = "Hafhis";
  const hello = `Hello ${name}`;

  expect(hello).toBe("Hello Hafhis");
});

test("Test toEquals()", () => {
  let person = { id: "hafhis" };
  person.name = "Hafhis Gustiawan";

  expect(person).toEqual({ id: "hafhis", name: "Hafhis Gustiawan" });
});
