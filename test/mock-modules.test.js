import { getAllProducts, getProductById } from "../src/database";
import { ProductService } from "../src/product-service";

jest.mock("../src/database.js");

test("mock modules getProductById", () => {
  //ketika sudah di mocking maka implementasinya dalam file ini akan mengikuti aturan mock ini
  getProductById.mockImplementation((id) => {
    return { id, name: "Produck Mock" };
  });

  const product = ProductService.findById(1);

  expect(product).toEqual({
    id: 1,
    name: "Produck Mock",
  });
});

test("mock modules getAllProducts", () => {
  const products = [
    {
      id: 1,
      name: "Product Mock",
    },
    {
      id: 2,
      name: "Product Mocking",
    },
  ];

  getAllProducts.mockImplementation(() => {
    return products;
  });

  expect(ProductService.findAll()).toEqual(products);
});
