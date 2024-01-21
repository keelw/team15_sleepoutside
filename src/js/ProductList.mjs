import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(item) {
    return `<li class="product-card">
        <a href="product_pages/index.html?product=${item.Id}">
            <img src="${item.Image}" alt="Image of ${item.Name}">
            <h3 class="card_brand">${item.Brand.Name}</h3>
            <h2 class="card_name">${item.Name}</h2>
            <p class="product-card_price">$${item.FinalPrice}</p>
        </a>
      </li>`
}

function filterProductList(list, itemStart, itemCount) {
    list.splice(itemStart, itemCount);
    //list.splice(3, 1);
}

export default class ProductList {
    constructor(category, dataSource, listElement) {
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }
    async init() {
        const list = await this.dataSource.getData();
        filterProductList(list, 2, 1);
        filterProductList(list, 3, 1);

        this.renderList(list);
    }

    renderList(list) {
        renderListWithTemplate(productCardTemplate, this.listElement, list);
    }
}