import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(item) {
    return `<li class="product-card">
        <a href="../product_pages/index.html?product=${item.Id}">
            <img src="${item.Images.PrimaryMedium}" alt="Image of ${item.Name}">
            <h3 class="card_brand">${item.Brand.Name}</h3>
            <h2 class="card_name">${item.Name}</h2>
            <p class="product-card_price">$${item.FinalPrice}</p>
        </a>
      </li>`
}

function filterProductList(list, itemStart, itemCount) {
    list.splice(itemStart, itemCount);
}

export default class ProductList {
    constructor(category, dataSource, listElement) {
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }
  
    async init() {
        const list = await this.dataSource.getData(this.category);        filterProductList(list, 2, 1);
        filterProductList(list, 3, 1);
        this.renderList(list);

        if (this.category == "sleeping-bags") {
            document.querySelector(".title").innerHTML = `Top Products: Sleeping Bags`;
        }
        else if (this.category == "hammocks") {
            document.querySelector(".title").innerHTML = `Top Products: Hammocks`;
        }
        else if (this.category == "backpacks") {
            document.querySelector(".title").innerHTML = `Top Products: Backpacks`;
        }
        else {
            document.querySelector(".title").innerHTML = `Top Products: Tents`;
        }
    }

    renderList(list) {
        renderListWithTemplate(productCardTemplate, this.listElement, list);
    }
}