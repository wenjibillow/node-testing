let products = [];
let users = [];
let carts = [];

//products
function getProducts() {
  return products;
}
function getProduct(id) {
  return products.find((product) => product.id === id);
}

function addProduct(product) {
  products.push(product);
}

function updateProduct(product) {
  products = products.filter((p) => p.id === product.id);
  products.push(product);
  return product;
}

function deleteProduct(id) {
  return products.filter((product) => product.id === id);
}

//users
function getUsers() {
  return users;
}

function getUser(login) {
  return users.find((user) => user.login === login);
}
function addUser() {
  users.push(user);
}
function deleteUser(login) {
  return users.filter((user) => user.login === login);
}

//carts

function getCart(userLogin) {
  return carts.find((cart) => cart.userLogin === userLogin);
}

function addCart(userLogin) {
  carts.push(userLogin);
}

function updateCart(userLogin, item) {
  const cart = carts.find((cart) => cart.userLogin === userLogin);
  cart.filter((i) => i.id === item.id);
  cart.push(item);
}

function deleteCart(userLogin, itemId) {
  const cart = carts.find((cart) => cart.userLogin === userLogin);
  cart.filter((cart) => cart.id === itemId);
}

module.exports = {
  addProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  getUsers,
  getUser,
  addUser,
  deleteUser,
  getCart,
  addCart,
  updateCart,
  deleteCart,
};
