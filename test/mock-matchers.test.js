import { calculate } from "../src/sum";

test("test mock matchers", () => {
  const callback = jest.fn();

  calculate([10, 10, 10], callback);
  calculate([10, 10, 10, 10, 10], callback);

  expect(callback).toHaveBeenCalled(); //untuk mengecek apakah mock pernah dipanggil
  expect(callback).toHaveBeenCalledTimes(2); //pernah dipanggil berapa kali
  expect(callback).toHaveBeenCalledWith(30); //pernah dipanggil dg parameter
  expect(callback).toHaveBeenCalledWith(50); //pernah dipanggil dg parameter
});
