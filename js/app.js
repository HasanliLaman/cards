"use strict";

const flipCards = function () {
  const cards = document.querySelectorAll(".card");

  cards.forEach((el) =>
    el.addEventListener("click", function () {
      el.classList.add("card--flipped");
    })
  );
};

const renderCards = function () {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
  const shuffledNumbers = numbers.sort((a, b) => 0.5 - Math.random());
  const cardContainer = document.querySelector(".cards");

  let html = ``;

  for (let i = 0; i < numbers.length; i++) {
    html += `<div class="card__container">
            <div class="card" data-number="${shuffledNumbers[i]}">
              <div class="card__front">
                <svg class="icon--cover">
                  <use href="images/sprite.svg#cover"></use>
                </svg>
              </div>
              <div class="card__back">
                <img class="icon--avatar" src="images/avatar${shuffledNumbers[i]}.svg" alt="" />
              </div>
            </div>
          </div>`;
  }

  cardContainer.insertAdjacentHTML("afterbegin", html);
};

const disableCards = function () {
  const cards = document.querySelectorAll(".card");
  cards.forEach((el) => (el.style.pointerEvents = "none"));
};

const enableCards = function () {
  const cards = document.querySelectorAll(".card");
  cards.forEach((el) => (el.style.pointerEvents = "auto"));
};

const isMatching = function (el1, el2) {
  if (el1.dataset.number === el2.dataset.number) {
    [el1, el2].forEach((el) => el.classList.add("card--flipped"));
    return;
  }
  setTimeout(function () {
    [el1, el2].forEach((el) => {
      el.classList.remove("card--flipped");
      el.style.pointerEvents = "auto";
    });
  }, 1200);
};

const mathchingHandler = function () {
  const cardContainer = document.querySelector(".cards");
  let chosen = [];
  cardContainer.addEventListener("click", function (e) {
    const target = e.target.closest(".card");
    if (!target) return;
    chosen.push(target);
    chosen.forEach((el) => (el.style.pointerEvents = "none"));
    if (chosen.length === 2) {
      isMatching(chosen[0], chosen[1]);
      chosen = [];
    }
  });
};

renderCards();
mathchingHandler();
flipCards();
