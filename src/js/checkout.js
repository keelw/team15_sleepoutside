import { alertMessage, loadHeaderFooter } from "./utils.mjs";
import CheckoutProcess from "./CheckoutProcess.mjs";

loadHeaderFooter();

const myCheckout = new CheckoutProcess("so-cart", ".checkout-summary");
myCheckout.init();

document
  .querySelector("#zip")
  .addEventListener("blur", myCheckout.calculateOrdertotal.bind(myCheckout));

// listening for click on the button
document.querySelector("#checkoutSubmit").addEventListener("click", (e) => {
  e.preventDefault();

  const myForm = document.forms[0];
  if (myForm.checkValidity()){
    myCheckout.checkout();
    window.location.href = "../checkout/success.html";
  }
  else {
    document.querySelectorAll("input").forEach(element => {
      if (!element.checkValidity()){
        alertMessage(`Error field: ${element.name}, ${element.validationMessage}`);
      }
    })
  }
});

// this is how it would look if we listen for the submit on the form
// document.forms['checkout']
// .addEventListener('submit', (e) => {
//   e.preventDefault();
//   const myForm = document.forms[0];

// });
