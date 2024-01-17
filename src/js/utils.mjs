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
//export function setLocalStorage(key, data) {
  //localStorage.setItem(key, JSON.stringify(data));
//}

//Fixing storage
//make the local storage to store array instead of objects
export function setLocalStorage(key, data) {
  
  //create an array to store getLocalStorage(function that stores the items that are selected one by one)
  //storing an obect(getLocalStorage function) into an array(variable array)
  let array = getLocalStorage(key);
  //to add each item into the array[]
  array.push(data);
  //return the array
  localStorage.setItem(key, JSON.stringify(array)); 
}

// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}
