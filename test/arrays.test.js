test("Array matchers", () => {
  const arr = ["bokek", "banget", "gue"];
  expect(arr).toContain("banget");
  expect(arr).not.toContain("bangettts");

  const names = ["Hafhis", "Gustiawan", "Hasibuan"];
  //kalo bukan array object pake nya toContain()
  expect(names).toContain("Gustiawan");
  expect(names).toEqual(["Hafhis", "Gustiawan", "Hasibuan"]);

  const persons = [{ name: "Wahyu" }, { name: "Viko" }, { name: "Bakekok" }];
  //kalo array object pakenya toContainEqual()
  expect(persons).toContainEqual({ name: "Wahyu" });
  expect(persons).toEqual([
    { name: "Wahyu" },
    { name: "Viko" },
    { name: "Bakekok" },
  ]);
});
