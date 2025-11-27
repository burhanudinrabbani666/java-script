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

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener("click", openModal);

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector(".header");
const allSection = document.querySelectorAll(".section");

console.log(allSection);

document.getElementById("section--1");
const allButton = document.getElementsByTagName("button");
console.log(allButton);

console.log(document.getElementsByClassName("btn"));

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
