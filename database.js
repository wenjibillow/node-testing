let products = [];

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
  return products.filter((p) => p.id === id);
}
module.exports = { addProduct, getProducts, getProduct, updateProduct };
