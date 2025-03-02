describe("Not matchers here", () => {
  test("Not matchers for strings", () => {
    const name = "Hafhis Gustiawan";

    expect(name).not.toBe("Kurama");
    expect(name).not.toEqual("Kurama");
    expect(name).not.toMatch(/kurama/);
  });

  test("Not matchers for numbers", () => {
    //tinggal pake .not sebelum panggil matchers func
  });

  test("Not matchers for array", () => {
    //tinggal pake .not sebelum panggil matchers func
  });
});
