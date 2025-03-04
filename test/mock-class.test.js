import { UserRepository } from "../src/user-repo";
import { UserService } from "../src/user-service";

jest.mock("../src/user-repo.js");

const repository = new UserRepository();
const service = new UserService(repository);

test("test mock user save", () => {
  const user = {
    id: 1,
    name: "Hafhis",
  };

  service.save(user);

  expect(repository.save).toHaveBeenCalled();
  expect(repository.save).toHaveBeenCalledWith(user);
});

test("test mock class findById", () => {
  const user = { id: 1, name: "Eko" };
  repository.findById.mockReturnValueOnce(user);
  expect(service.findById(1)).toEqual(user);
  expect(service.findById).toHaveBeenCalled();
});

test("test mock class findAll", () => {
  const users = [
    { id: 1, name: "Hafhis" },
    { id: 2, name: "Gustiawan" },
  ];
  repository.findAll.mockReturnValueOnce(users);
  expect(service.findAll()).toEqual(users);
  expect(repository.findAll).toHaveBeenCalled();
});
