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

// helper to get parameter strings
export function getParam(param) {
  const queryString = window.location.search;
  const UrlParams = new URLSearchParams(queryString);
  const product = UrlParams.get(param);
  return product;
}

// function to take a list of objects and a template and insert the objects as HTML into the DOM
export function renderWithTemplate(
  templateFn, parentElement, data, position = 'afterbegin', clear = false, callback
) {
  // Use the template function to generate HTML from the provided data
  const productHTML = data.map(templateFn);
  // If the 'clear' parameter is set to true, empty the content of the parentElement
  if (clear) {
    parentElement.innerHTML = '';
  }
  // Insert the generated HTML into the DOM at the specified position
  parentElement.insertAdjacentHTML(position, productHTML.join(''));
  // Check if a callback function is provided and call it
  if (callback) {
    callback(data);
  }
}

// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener('touchend', (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener('click', callback);
}