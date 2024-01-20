import { setLocalStorage } from './utils.mjs';
import ProductData from './ProductData.mjs';

const dataSource = new ProductData('tents');

// Initialize a variable with the current length of the local storage.
// It is intended to be used as a unique idenfifier for items in the shopping cart. 
let storeItem = localStorage.length;

//After storing the product, it increments 'storeItem'. It is meant to add a product to the shopping cart.
function addProductToCart(product) {
  setLocalStorage('so-cart' + storeItem, product);
  storeItem++;
}

// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById('addToCart')
  .addEventListener('click', addToCartHandler);