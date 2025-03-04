import { getAllProducts } from "../src/database";
import { ProductService } from "../src/product-service";

jest.mock("../src/database.js", () => {
  const originalModule = jest.requireActual("../src/database.js");

  // dg begini maka hanya getAllProduct() saja yang di mock
  return {
    _esModule: true,
    ...originalModule,
    getAllProducts: jest.fn(),
  };
});

test.failing("Failing partial mock modules", () => {
  ProductService.findById(1);
});
