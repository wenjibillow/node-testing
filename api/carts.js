const app = require("../app");
const database = require("../database");

module.exports = function (app) {
  app.get("/api/carts/:userlogin", function (req, res) {
    res.json(database.getCartItems());
  });
};
