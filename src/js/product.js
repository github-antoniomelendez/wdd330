import { getLocalStorage, setLocalStorage, getParams } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from './ProductDetails.mjs';

function addProductToCart(product) {
  const products = JSON.parse(localStorage.getItem("so-cart")) || []
  products.push(product)
  setLocalStorage("so-cart", products);
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);

const productId = getParams('product');
const dataSource = new ProductData('tents');

const product = new ProductDetails(productId, dataSource);
product.init();
