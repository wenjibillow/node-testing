const app = require("../app");
const database = require("../server/database");

module.exports = function (app) {
  app.get("/api/carts/:userLogin", function (req, res) {
    res.json(database.getCart());
  });

  app.post("/api/carts/:userLogin/", function (req, res) {
    const cartItem = {
      productId: req.body.productId,
      amount: req.body.amount,
    };
    database.addCartItem(cartItem);
    res.json();
  });

  app.put("/api/carts/:userLogin/:productId", function (req, res) {
    const editedCartItem = {
      productId: req.params.productId,
      amount: req.body.amount,
    };
    res.json(database.updateCart(editedCartItem));
  });

  app.delete("/api/carts/:userLogin/:productId", function (req, res) {
    res.json(database.deleteCart(req.params.productId));
  });
};
