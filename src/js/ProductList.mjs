import { renderListWithTemplate, calculatePercentage } from "./utils.mjs";

function productCardTemplate(item) {
    return `<li class="product-card">
        <a href="../product_pages/index.html?product=${item.Id}">
            <img src="${item.Images.PrimaryMedium}" alt="Image of ${item.Name}">
            <h3 class="card_brand">${item.Brand.Name}</h3>
            <h2 class="card_name">${item.Name}</h2>
            <p class="product-card__price">$${item.FinalPrice} (${calculatePercentage(item.FinalPrice, item.SuggestedRetailPrice)}% off)</p>
            <p class="product-card__full__price">$${item.SuggestedRetailPrice}.00</p>
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