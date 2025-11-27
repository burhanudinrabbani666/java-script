"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (event) {
  event.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

const btnScroolTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScroolTo.addEventListener("click", function (event) {
  const s1coords = section1.getBoundingClientRect();

  // Modern ✅
  section1.scrollIntoView({ behavior: "smooth" });
});

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

/*
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

const header = document.querySelector(".header");
const allSection = document.querySelectorAll(".section");

// console.log(allSection);

document.getElementById("section--1");
const allButton = document.getElementsByTagName("button");
// console.log(allButton);

// console.log(document.getElementsByClassName("btn"));

// creating and inserting element
// insertAdjacemetnHTML

const messsage = document.createElement("div");
messsage.classList.add("cookie-message");
messsage.textContent = "we use cookie to improve functionality adn analytics";
messsage.innerHTML = `we use cookie to improve functionality adn analytics. <button class="btn btn--close--cookie">Got it!<buton/>`;

// header.prepend(messsage);
header.append(messsage);
// header.append(messsage.cloneNode(true));

// header.before(messsage);
// header.after(messsage);

// Deleting element

document
  .querySelector(".btn--close--cookie")
  .addEventListener("click", function () {
    messsage.remove(); // new one

    messsage.parentElement.removeChild(messsage); // old method
  });

// styles
messsage.style.backgroundColor = "#37383d";
messsage.style.width = "120%";

console.log(messsage.style.color); // <Empty string>
console.log(messsage.style.backgroundColor);
console.log(getComputedStyle(messsage).color);
console.log(getComputedStyle(messsage).height);

messsage.style.height =
  Number.parseFloat(getComputedStyle(messsage).height, 10) + 40 + "px";

document.documentElement.style.setProperty("--color-primary", "indigo");

// atributes
const logo = document.querySelector(".nav__logo");
console.log(logo.alt);
console.log(logo.src);
console.log(logo.getAttribute("src"));
console.log(logo.className);

logo.alt = "Beutifull minimalist logo";

console.log(logo.alt);

// not standar
console.log(logo.designer);
console.log(logo.getAttribute("designer"));
logo.setAttribute("company", "Bankist");

const link = document.querySelector(".nav__link--btn");
console.log(link.href);
console.log(link.getAttribute("href"));

// Data atributes
console.log(logo.dataset.versionNumber);

//classes
logo.classList.add("clasname");
logo.classList.remove("clasname");
logo.classList.toggle("clasname");
logo.classList.contains("clasname");

// dont use this
// logo.className = "jonas";

console.log(logo);

const h1 = document.querySelector("h1");

const alert1 = function () {
  alert("addEventListener: Great! Your reading the heading");
};

h1.addEventListener("mouseenter", alert1);

setTimeout(() => h1.removeEventListener("mouseenter", alert1), 3000);
*/

// rgb(225,225,225)

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 225)}, ${randomInt(0, 225)}, ${randomInt(0, 225)})`;

document
  .querySelector(".nav__link")
  .addEventListener("click", function (event) {
    this.style.backgroundColor = randomColor();
    console.log("LINK", event.target, event.currentTarget);
    console.log(event.currentTarget === this);

    // Stop propagnation
    // event.stopPropagation(); // Not good ❎
  });

document
  .querySelector(".nav__links")
  .addEventListener("click", function (event) {
    this.style.backgroundColor = randomColor();
    console.log("Container", event.target, event.currentTarget);
  });
document.querySelector(".nav").addEventListener(
  "click",
  function (event) {
    this.style.backgroundColor = randomColor();
    console.log("Nav", event.target, event.currentTarget);
  },
  true
);
