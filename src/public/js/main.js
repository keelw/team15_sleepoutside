import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";

const pd = new ProductData("tents");
const element = document.querySelector(".product-list")
const product = new ProductList("Tents", pd, element); 
product.init();