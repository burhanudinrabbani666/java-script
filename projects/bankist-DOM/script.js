"use strict";

//
const btnScroolTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContet = document.querySelectorAll(".operations__content");
const navigations = document.querySelector(".nav");

///////////////////////////////////////
// Modal window

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
/////////////////////////////////////////////////////

// Button scrolling 🔘
btnScroolTo.addEventListener("click", function (event) {
  const s1coords = section1.getBoundingClientRect();

  // Modern ✅
  section1.scrollIntoView({ behavior: "smooth" });
});

// Page navigation 📄
// 1. Add eventlistener to common paretn element
// 2, determine what element originated the event
document
  .querySelector(".nav__links")
  .addEventListener("click", function (event) {
    event.preventDefault();

    //Matching strategy
    if (event.target.classList.contains("nav__link")) {
      const id = event.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });

// Tabbed Componenet 📑

tabsContainer.addEventListener("click", function (event) {
  const clicked = event.target.closest(".operations__tab");

  // Guard
  if (!clicked) return;

  // remove active classes
  tabs.forEach((tab) => {
    tab.classList.remove("operations__tab--active");
  });

  tabsContet.forEach((content) => {
    content.classList.remove("operations__content--active");
  });

  // Active Tabs
  clicked.classList.add("operations__tab--active");

  // Active content tabs
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add(`operations__content--active`);
});

// Menu Fade Animations 🟦
const handleOver = function (event) {
  //use function
  if (event.target.classList.contains("nav__link")) {
    const link = event.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((sibling) => {
      if (sibling !== link) sibling.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

navigations.addEventListener(`mouseover`, handleOver.bind(0.5));

navigations.addEventListener("mouseout", handleOver.bind(1));

// Sticky Navigation

const header = document.querySelector(".header");
const navHeight = navigations.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) navigations.classList.add("sticky");
  else navigations.classList.remove("sticky");
};

const headerObs = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObs.observe(header);

// Reveal Section
const allSection = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSection.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
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

const h1 = document.querySelector("h1");

// Going Down ⬇️
console.log(h1.querySelectorAll(".highlight"));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = "white";
h1.lastElementChild.style.color = "grey";

// going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest(".header").style.background = "var(--gradient-secondary)";
h1.closest("h1").style.background = "var(--gradient-primary)";

//going side way

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);

[...h1.parentElement.children].forEach(function (event) {
  if (event !== h1) event.style.transform = "scale(0.5)";
});
*/
