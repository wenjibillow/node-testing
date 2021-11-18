const app = require("../app");
const supertest = require("supertest");
const request = supertest(app);

it("get products", async () => {
  const res = await request.get("/api/products");
  expect(res.status).toBe(200);
  expect(res.body).toStrictEqual([]);
});

it("post products", async () => {
  const product = { id: "123", name: "Tshirt", price: 1000 };
  const res = await await request.post("/api/products").send(product);
  expect(res.status).toBe(200);
  const response = await request.get("/api/products");
  expect(response.status).toBe(200);
  expect(response.body).toStrictEqual([product]);
});

it("get product", async () => {
  const product = { id: "123", name: "Tshirt", price: 1000 };
  const res = await await request.post("/api/products").send(product);
  expect(res.status).toBe(200);
  const response = await request.get("/api/products/" + product.id);
  expect(response.status).toBe(200);
  expect(response.body).toStrictEqual(product);
});
