const database = require("../database");

module.exports = function (app) {
  app.get("/api/products", function (req, res) {
    res.json(database.getProducts());
  });

  app.post("/api/products", function (req, res) {
    const product = {
      id: req.body.id,
      name: req.body.name,
      price: req.body.price,
    };
    database.addProduct(product);
    res.json();
  });
  app.get("/api/products/:id", function (req, res) {
    const product = database.getProduct(req.params.id);
    res.json(product);
  });
};

/* 
GET
/api/products/
GET
/api/products/:id
POST
/api/products/
PUT
/api/products/:id
DELETE
/api/products/:id

 */
