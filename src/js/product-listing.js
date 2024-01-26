import ProductData from './ProductData.mjs';
import ProductList from './ProductList.mjs';
import {loadHeaderFooter, getParam} from './utils.mjs'

loadHeaderFooter(); 

const category = getParam('category');
const datasource = new ProductData('tents');
const element = document.querySelector('.product-list');
const listing = new ProductList('Tents', category, datasource, element);

listing.init();
