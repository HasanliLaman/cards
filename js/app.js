"use strict";

// Flips cards when clicked
const flipCards = function () {
  const cards = document.querySelectorAll(".card");

  cards.forEach((el) =>
    el.addEventListener("click", function () {
      el.classList.add("card--flipped");
    })
  );
};

// Add cards in random places everytime
const renderCards = function () {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
  const shuffledNumbers = numbers.sort((a, b) => 0.5 - Math.random());
  const cardContainer = document.querySelector(".cards");

  cardContainer.innerHTML = ``;
  let html = ``;

  for (let i = 0; i < numbers.length; i++) {
    html += `<div class="card__container">
            <div class="card" data-number="${shuffledNumbers[i]}">
              <div class="card__front">
                <img class="icon--cover" src="images/card.svg" alt="" />
              </div>
              <div class="card__back">
                <img class="icon--avatar" src="images/avatar${shuffledNumbers[i]}.svg" alt="" />
              </div>
            </div>
          </div>`;
  }

  cardContainer.insertAdjacentHTML("beforeend", html);
};

// Disable cards when one is open
const disableCards = function () {
  const cards = document.querySelectorAll(".card");
  cards.forEach((el) => (el.style.pointerEvents = "none"));
};

// Enables cards if there are disabled ones
const enableCards = function () {
  const cards = document.querySelectorAll(".card");

  cards.forEach((el) => {
    el.style.pointerEvents = "auto";
    el.classList.remove("card--flipped");
  });
};

// Check whether two cards are same or not
const isMatching = function (el1, el2) {
  if (el1.dataset.number === el2.dataset.number) {
    [el1, el2].forEach((el) => el.classList.add("card--flipped")); //if same keep cards open
    return;
  }
  setTimeout(function () {
    // if not flip back
    [el1, el2].forEach((el) => {
      el.classList.remove("card--flipped");
      el.style.pointerEvents = "auto";
    });
  }, 1200);
};

// Uses isMatching when two cards are flipped
const mathchingHandler = function () {
  const cardContainer = document.querySelector(".cards");
  let chosen = [];
  const moves = document.querySelector(".moves");
  cardContainer.addEventListener("click", function (e) {
    const target = e.target.closest(".card");
    if (!target) return;
    chosen.push(target);
    chosen.forEach((el) => (el.style.pointerEvents = "none"));
    if (chosen.length === 2) {
      isMatching(chosen[0], chosen[1]);
      moves.textContent = `${Number(moves.textContent) + 1}`; // everytime 2 cards chosen the number of moves increases
      chosen = [];
    }
  });
};

// Info button and info block handler
const blockInfo = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const openInfo = function () {
  blockInfo.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeInfo = function () {
  blockInfo.classList.add("hidden");
  overlay.classList.add("hidden");
};

const modalHandler = function () {
  const btnInfo = document.querySelector(".btn--info");
  const overlay = document.querySelector(".overlay");
  const btnCloseInfo = document.querySelector(".btn--info-close");

  btnInfo.addEventListener("click", openInfo);
  btnCloseInfo.addEventListener("click", closeInfo);
  overlay.addEventListener("click", closeInfo);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !blockInfo.classList.contains("hidden")) {
      closeInfo();
    }
  });
};

// Sets timer for 100 seconds
const timer = function () {
  const time = document.querySelector(".timer");
  const failMessage = document.querySelector(".message--fail");
  const successMessage = document.querySelector(".message--success");
  const flippedCards = document.querySelectorAll(".card--flipped");

  const setTimer = setInterval(function () {
    const flippedCards = document.querySelectorAll(".card--flipped");
    time.textContent = `${Number(time.textContent) - 1}`;

    if (Number(time.textContent) === 0) {
      //if timer hits 0 game is over
      clearInterval(setTimer);
      failMessage.classList.remove("hidden");
      disableCards();
    }

    if (flippedCards.length === 16) {
      //if player wins timer stops
      disableCards();
      clearInterval(setTimer);
      successMessage.classList.remove("hidden");
    }
  }, 1000);

  const btnReset = document.querySelector(".btn--reset");
  btnReset.addEventListener("click", function () {
    clearInterval(setTimer);
  });
};

// When reset button is clicked, return everything back to its original state
const resetHandler = function () {
  const btnReset = document.querySelector(".btn--reset");

  btnReset.addEventListener("click", function () {
    document.querySelector(".timer").textContent = `100`;
    document.querySelector(".moves").textContent = `0`;
    document.querySelector(".message--fail").classList.add("hidden");
    document.querySelector(".message--success").classList.add("hidden");

    renderCards();
    flipCards();
    timer();
  });
};

// Call all functions
const init = function () {
  renderCards();
  flipCards();
  mathchingHandler();
  modalHandler();
  resetHandler();
  timer();
};

init();
