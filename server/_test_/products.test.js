const app = require("../app");
const supertest = require("supertest");
const request = supertest(app);
const db = require("../database");

afterEach(async function () {
  // delete any data created by test
  await db.cleanUp();
});

it("get products", async () => {
  const res = await request.get("/api/products");
  expect(res.status).toBe(200);
  expect(res.body).toStrictEqual([]);
});

it("post products", async () => {
  const product = { id: "123", name: "Tshirt", price: 1000 };
  await request.post("/api/products").send(product);
  const response = await request.get("/api/products");
  expect(response.status).toBe(200);
  expect(response.body).toStrictEqual([product]);
});

it("get product", async () => {
  const product = { id: "123", name: "Tshirt", price: 1000 };
  await request.post("/api/products").send(product);
  const response = await request.get("/api/products/" + product.id);
  expect(response.status).toBe(200);
  expect(response.body).toStrictEqual(product);
});

it("uppdate product", async () => {
  const product = { id: "123", name: "Tshirt", price: 1000 };
  await request.post("/api/products").send(product);
  const editedProduct = { id: "123", name: "Trousers", price: 2000 };
  const response = await request
    .put("/api/products/" + product.id)
    .send(editedProduct);
  expect(response.status).toBe(200);
  expect(response.body).toStrictEqual([editedProduct]);
});

it("delete product", async () => {
  const product = { id: "000", name: "Tshirt", price: 1000 };
  await request.post("/api/products").send(product);
  const response = await request.delete("/api/products/" + product.id);
  expect(response.status).toBe(200);

  let res = await request.get("/api/products");
  expect(res.body).toStrictEqual([]);

  res = await request.get("/api/products/" + product.id);
  expect(res.status).toBe(404);
});
