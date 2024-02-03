// wrapper for querySelector...returns matching element
  export function qs(selector, parent = document) {
    return parent.querySelector(selector);
  }

  // or a more concise version if you are into that sort of thing:
  // export const qs = (selector, parent = document) => parent.querySelector(selector);
  // retrieve data from localstorage
  export function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  // save data to local storage
    export function setLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  // set a listener for both touchend and click
  export function setClick(selector, callback) {
    qs(selector).addEventListener("touchend", (event) => {
      event.preventDefault();
      callback();
    });
    qs(selector).addEventListener("click", callback);
  }

// helper to get parameter strings
export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(param);
  return product;
}

  // render a list with the provided template 
    export function renderListWithTemplate(templateFn, parentElement, list, position = "afterbegin", clear = false) {
    const htmlStrings = list.map(templateFn);
    if (clear) {
      parentElement.innerHTML = "";
    }
    parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
  }

  // render an item with the provided template
  export function renderWithTemplate(template, parent, data, callback) {
    parent.insertAdjacentHTML("afterbegin", template);
    if (callback) {
      callback(data);
    }
  }

  export async function loadHeaderFooter () {
    const header = document.getElementById("main-header");
    const footer = document.getElementById("footer");
    const headerTemplate = await loadTemplate("../public/partials/header.html");
    const footerTemplate = await loadTemplate("../public/partials/footer.html");
    renderWithTemplate(headerTemplate, header);
    renderWithTemplate(footerTemplate, footer);
  }

  async function loadTemplate(path) {
    const res = await fetch(path);
    const template = await res.text();
    return template;
  }

  // calculate the percentage off for the sale price display
  export function calculatePercentage(fullPrice, listPrice) {
    return Math.round(100 - (fullPrice / listPrice * 100 * 10) / 10);
  }

  export function alertMessage(messgae, scroll=true){
    const alert = document.createElement("div");
    alert.classList.add("alert");

    const alertMessage = document.createElement("p");
    alertMessage.textContent = messgae;

    const close = document.createElement("button");
    close.textContent = "X";

    alert.appendChild(alertMessage);
    alert.appendChild(close);

    close.addEventListener("click", function(e){
      alert.style.display = "none";
    })

    const main = document.querySelector("main");
    main.prepend(alert);
    
    if(scroll) {
      window.scrollTo(0,0);
    }
  }