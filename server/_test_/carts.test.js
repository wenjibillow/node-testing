const app = require("../app");
const supertest = require("supertest");
const request = supertest(app);
const db = require("../database");

afterEach(async function () {
  await db.cleanUp();
});

it("get cart", async () => {
  const res = await request.get("/api/carts/:userLogin");
  expect(res.status).toBe(200);
  expect(res.body).toStrictEqual([]);
});

it("add item to cart", async () => {
  const cartItem = {
    productId: "123",
    amount: 49,
  };
  const res = await request.post("/api/carts/:userLogin/").send(cartItem);
  expect(res.status).toBe(200);
  const response = await request.get("/api/carts/:userLogin/");
  expect(response.status).toBe(200);
  expect(response.body).toStrictEqual([cartItem]);
});

it("uppdate product in the cart", async () => {
  const cartItem = {
    productId: "123",
    amount: 49,
  };

  await request.post("/api/carts/:userLogin/").send(cartItem);
  const editedCartItem = {
    productId: "123",
    amount: 50,
  };
  const response = await request
    .put("/api/carts/:userLogin/" + editedCartItem.productId)
    .send(editedCartItem);
  expect(response.status).toBe(200);
  expect(response.body).toStrictEqual([editedCartItem]);
});

it("delete item", async () => {
  const cartItem = {
    productId: "100",
    amount: 49,
  };
  await request.post("/api/carts/:userLogin/").send(cartItem);

  const response = await request.delete(
    "/api/carts/:userLogin/" + cartItem.productId
  );
  expect(response.status).toBe(200);

  let resDel = await request.get("/api/carts/:userLogin/");
  expect(resDel.body).toStrictEqual([]);
});
