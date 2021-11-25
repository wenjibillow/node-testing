const app = require("../app");
const database = require("../database");

module.exports = function (app) {
  app.get("/api/users", function (req, res) {
    res.json(database.getUsers());
  });

  app.post("/api/users", function (req, res) {
    const user = {
      name: req.body.name,
      login: req.body.login,
    };
    database.addUser(user);
    res.json();
  });

  app.get("/api/users/:login", function (req, res) {
    const user = database.getUser(req.params.login);
    if (user) {
      return res.json(user);
    }
    return res.status(404).json();
  });

  app.delete("/api/users/:login", function (req, res) {
    res.json(database.deleteUser(req.params.login));
  });
};
