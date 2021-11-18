const products = [];

function getProducts() {
  return products;
}
function getProduct(id) {
  return products.find((product) => product.id === id);
}

function addProduct(product) {
  products.push(product);
}

module.exports = { addProduct, getProducts, getProduct };
