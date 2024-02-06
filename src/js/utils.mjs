import { doc } from "prettier";

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

export function alertMessage(message, scroll = true);
// create element to hold our alert
const alert = document.createElement('div'); 
// add a class to style the alert
alert.classList.add('alert');
// set the contents. You should have a message and an X or something the user can click on to remove
alert.innerHTML = `<span class='close'>&times;</span>
<span>${message}</span>`;
// add a listener to the alert to see if they clicked on the X
// if they did then remove the child
alert.addEventListener('click', function (e) {
  if (e.target.tagName === 'SPAN' && e.target.classList.contains('close')) {
    main.removeChild(this);
  }
});

// add the alert to the top of main
const main = document.querySelector('main');
main.prepend(alert);
// make sure they see the alert by scrolling to the top of the window
//we may not always want to do this...so default to scroll=true, but allow it to be passed in and overridden.
if (scroll)
  window.scrollTo(0, 0);

export function removeAllAlerts() {
  const alerts = document.querySelectorAll('.alert');
  alerts.forEach((alert) => document.querySelector('main').removeChild(alert));
};