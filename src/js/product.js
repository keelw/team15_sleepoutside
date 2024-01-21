import ProductData from "./ProductData.mjs";
import { getParam } from "./utils.mjs";
import ProductDetails from "./ProductDetails.mjs";
import Alert from "./alert.js";


const dataSource = new ProductData("tents");
const productId = getParam("product");

const product = new ProductDetails(productId, dataSource);
product.init();

const alertInstance = new Alert();
const alertSection = alertInstance.createAlertSection();

const mainElement = document.querySelector("main");
mainElement.insertBefore(alertSection, mainElement.firstChild);
