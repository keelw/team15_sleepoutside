import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";

const pd = new ProductData("tents");
const element = document.querySelector(".product-list")
const product = new ProductList("Tents", pd, element); 
product.init();

function DisplayBanner(){
    let visit = parseInt(localStorage.getItem('visit'));
    if(!visit){
        document.querySelector('.banner').classList.add('show');
        visit = 0;
    }
    localStorage.setItem('visit', visit + 1);
}

DisplayBanner();