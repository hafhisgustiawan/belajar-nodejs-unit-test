//tidak ada jest.mock() di sini guys
//pakai jest spyOn()

import { UserRepository } from "../src/user-repo";
import { UserService } from "../src/user-service";

const repository = new UserRepository();
const service = new UserService(repository);

test("test mock class findById", () => {
  const user = { id: 1, name: "Hafhis Gustiawan" };
  const findByIdMock = jest.spyOn(repository, "findById"); //ini koentji guys
  findByIdMock.mockReturnValueOnce(user);

  expect(service.findById(1)).toEqual(user);
  expect(repository.findById).toHaveBeenCalled();
});
