import { doc } from "prettier";
import { setLocalStorage, calculatePercentage } from "./utils.mjs";
import { loadHeaderFooter, getLocalStorage } from "./utils.mjs";

loadHeaderFooter();


function productDetailsTemplate(product) {
  return `<section class="product-detail"> <h3>${product.Brand.Name}</h3>
    <h2 class="divider">${product.NameWithoutBrand}</h2>
    <img
      class="divider"
      src="${product.Images.PrimaryLarge}"
      alt="${product.NameWithoutBrand}"
    />
    <p class="product-card__price">$${product.FinalPrice} (${calculatePercentage(product.FinalPrice, product.SuggestedRetailPrice)}% off)</p>
    <p class="product-card__full__price">$${product.SuggestedRetailPrice}.00</p>
    <p class="product__color">${product.Colors[0].ColorName}</p>
    <p class="product__description">
    ${product.DescriptionHtmlSimple}
    </p>
    <div class="product-detail__add">
      <button id="addToCart" data-id="${product.Id}">Add to Cart</button>
    </div></section>`;
}

export default class ProductDetails {
  constructor(productId, dataSource) {
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
  }

  async init() {
    // use our datasource to get the details for the current product. findProductById will return a promise! use await or .then() to process it
    this.product = await this.dataSource.findProductById(this.productId);
    // once we have the product details we can render out the HTML
    this.renderProductDetails("main");
    // once the HTML is rendered we can add a listener to Add to Cart button
    // Notice the .bind(this). Our callback will not work if we don't include that line. Review the readings from this week on 'this' to understand why.
    document
      .getElementById("addToCart")
      .addEventListener("click", this.addToCart.bind(this));
  }

  addToCart() {
    let cartContents = getLocalStorage("so-cart");
    let duplicateIndex = null;

    //check to see if there was anything there
    if (!cartContents) {
      cartContents = [];

    } else { 
      cartContents.forEach((content, index) => {
        const objectArray = Object.values(content);

        if(objectArray.includes(this.product.Id)) {
          duplicateIndex = index;
        }
      });
    }

    if (duplicateIndex != null) {
      cartContents[duplicateIndex]["quantity"] += 1;

    } else {
      this.product["quantity"] = 1;
      cartContents.push(this.product);
    }

    setLocalStorage("so-cart", cartContents);
    this.addToCartAnimate();
  }

  renderProductDetails(selector) {
    const element = document.querySelector(selector);
    element.insertAdjacentHTML(
      "afterbegin",
      productDetailsTemplate(this.product)
    );
  }

  addToCartAnimate(){
    const cartIcon = document.querySelector(".cart a svg");
    cartIcon.classList.add("animate");

    setTimeout(() => {
      cartIcon.classList.remove("animate");
    }, 1000);
  }
}