const express = require("express");
const app = express();
app.use(express.json());
require("../server/api/products")(app);
require("../server/api/users")(app);
require("../server/api/carts")(app);

app.get("/", (req, res) => {
  res.send("We are on HOME!");
});

module.exports = app;
