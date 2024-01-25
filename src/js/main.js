import ProductList from "./ProductList.mjs";
import ProductData from "./ProductData.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const dataSource = new ProductData("tents");
const element = document.querySelector(".product-list");
const productListing = new ProductList("Tents", dataSource, element);

productListing.init();

function DisplayBanner() {
  let visit = parseInt(localStorage.getItem("visit"));
  if (!visit) {
    document.querySelector(".banner").classList.add("show");
    visit = 0;
  }
  localStorage.setItem("visit", visit + 1);
}

DisplayBanner();
