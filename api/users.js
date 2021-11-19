const app = require("../app");
const database = require("../database");

module.exports = function (app) {
  app.get("/api/users", function (req, res) {
    res.json(database.getUsers());
  });
};
