let products = [];
let users = [];
let cart = [];

function cleanUp() {
  products = [];
  users = [];
  cart = [];
}

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
  products = products.filter((p) => p.id !== product.id);
  products.push(product);
  return products;
}

function deleteProduct(id) {
  products = products.filter((product) => product.id !== id);
  return products;
}

//users
function getUsers() {
  return users;
}

function getUser(login) {
  return users.find((user) => user.login === login);
}
function addUser(user) {
  users.push(user);
}
function deleteUser(login) {
  users = users.filter((user) => user.login !== login);
  return users;
}

//carts

function getCart() {
  return cart;
}

function addCartItem(cartItem) {
  cart.push(cartItem);
}

function updateCart(addedItem) {
  cart = cart.filter((item) => item.id !== addedItem.id);
  cart.push(addedItem);
  return cart;
}

function deleteCart(itemId) {
  cart = cart.filter((cart) => cart.id !== itemId);
  return cart;
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
  addCartItem,
  updateCart,
  deleteCart,
  cleanUp,
};
