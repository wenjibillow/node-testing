const express = require("express");
const app = express();
app.use(express.json());
require("./api/products")(app);
require("./api/users")(app);
require("./api/carts")(app);

app.get("/", (req, res) => {
  res.send("We are on HOME!");
});

module.exports = app;
