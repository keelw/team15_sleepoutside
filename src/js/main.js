import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

function DisplayBanner() {
  let visit = parseInt(localStorage.getItem("visit"));
  if (!visit) {
    document.querySelector(".banner").classList.add("show");
    visit = 0;
  }
  localStorage.setItem("visit", visit + 1);
}

DisplayBanner();