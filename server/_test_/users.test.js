const app = require("../app");
const supertest = require("supertest");
const request = supertest(app);
const db = require("../database");

afterEach(async function () {
  await db.cleanUp();
});

it("get users", async () => {
  const response = await request.get("/api/users");
  expect(response.status).toBe(200);
  expect(response.body).toStrictEqual([]);
});
it("add one user", async () => {
  const user = {
    login: "123",
    name: "eli",
  };
  const res = await request.post("/api/users").send(user);
  expect(res.status).toBe(200);
  const response = await request.get("/api/users");
  expect(response.status).toBe(200);
  expect(response.body).toStrictEqual([user]);
});
it("get one user", async () => {
  const user = {
    login: "123",
    name: "eli",
  };
  const response = await request.post("/api/users").send(user);
  expect(response.status).toBe(200);
  const res = await request.get("/api/users/" + user.login);
  expect(res.status).toBe(200);
  expect(res.body).toStrictEqual(user);
});

it("delete one user", async () => {
  const user = {
    login: "123",
    name: "eli",
  };
  const res = await request.post("/api/users").send(user);
  expect(res.status).toBe(200);
  const response = await request.delete("/api/users/" + user.login);
  expect(response.status).toBe(200);

  let resGet = await request.get("/api/users");
  expect(resGet.body).toStrictEqual([]);

  responseGet = await request.get("/api/users/" + user.id);
  expect(responseGet.status).toBe(404);
});
