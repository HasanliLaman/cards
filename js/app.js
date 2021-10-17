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
  const numbers = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
  const shuffledNumbers = numbers.sort((a, b) => 0.5 - Math.random());
  const cardContainer = document.querySelector(".cards");

  const html = `<div class="card__container">
                  <div class="card" data-number="${shuffledNumbers[0]}">
                    <div class="card__front">
                      <svg class="icon--cover">
                        <use href="images/sprite.svg#cover"></use>
                      </svg>
                    </div>
                    <div class="card__back">
                      <img class="icon--avatar" src="images/avatar${shuffledNumbers[0]}.svg" alt="" />
                    </div>
                  </div>
                </div>

                <div class="card__container">
                  <div class="card" data-number="${shuffledNumbers[1]}">
                    <div class="card__front">
                      <svg class="icon--cover">
                        <use href="images/sprite.svg#cover"></use>
                      </svg>
                    </div>
                    <div class="card__back">
                      <img class="icon--avatar" src="images/avatar${shuffledNumbers[1]}.svg" alt="" />
                    </div>
                  </div>
                </div>

                <div class="card__container">
                  <div class="card" data-number="${shuffledNumbers[2]}">
                    <div class="card__front">
                      <svg class="icon--cover">
                        <use href="images/sprite.svg#cover"></use>
                      </svg>
                    </div>
                    <div class="card__back">
                      <img class="icon--avatar" src="images/avatar${shuffledNumbers[2]}.svg" alt="" />
                    </div>
                  </div>
                </div>

                <div class="card__container">
                  <div class="card" data-number="${shuffledNumbers[3]}">
                    <div class="card__front">
                      <svg class="icon--cover">
                        <use href="images/sprite.svg#cover"></use>
                      </svg>
                    </div>
                    <div class="card__back">
                      <img class="icon--avatar" src="images/avatar${shuffledNumbers[3]}.svg" alt="" />
                    </div>
                  </div>
                </div>

                <div class="card__container">
                  <div class="card" data-number="${shuffledNumbers[4]}">
                    <div class="card__front">
                      <svg class="icon--cover">
                        <use href="images/sprite.svg#cover"></use>
                      </svg>
                    </div>
                    <div class="card__back">
                      <img class="icon--avatar" src="images/avatar${shuffledNumbers[4]}.svg" alt="" />
                    </div>
                  </div>
                </div>

                <div class="card__container">
                  <div class="card" data-number="${shuffledNumbers[5]}">
                    <div class="card__front">
                      <svg class="icon--cover">
                        <use href="images/sprite.svg#cover"></use>
                      </svg>
                    </div>
                    <div class="card__back">
                      <img class="icon--avatar" src="images/avatar${shuffledNumbers[5]}.svg" alt="" />
                    </div>
                  </div>
                </div>

                <div class="card__container">
                  <div class="card" data-number="${shuffledNumbers[6]}">
                    <div class="card__front">
                      <svg class="icon--cover">
                        <use href="images/sprite.svg#cover"></use>
                      </svg>
                    </div>
                    <div class="card__back">
                      <img class="icon--avatar" src="images/avatar${shuffledNumbers[6]}.svg" alt="" />
                    </div>
                  </div>
                </div>

                <div class="card__container">
                  <div class="card" data-number="${shuffledNumbers[7]}">
                    <div class="card__front">
                      <svg class="icon--cover">
                        <use href="images/sprite.svg#cover"></use>
                      </svg>
                    </div>
                    <div class="card__back">
                      <img class="icon--avatar" src="images/avatar${shuffledNumbers[7]}.svg" alt="" />
                    </div>
                  </div>
                </div>

                <div class="card__container">
                  <div class="card" data-number="${shuffledNumbers[8]}">
                    <div class="card__front">
                      <svg class="icon--cover">
                        <use href="images/sprite.svg#cover"></use>
                      </svg>
                    </div>
                    <div class="card__back">
                      <img class="icon--avatar" src="images/avatar${shuffledNumbers[8]}.svg" alt="" />
                    </div>
                  </div>
                </div>

                <div class="card__container">
                  <div class="card" data-number="${shuffledNumbers[9]}">
                    <div class="card__front">
                      <svg class="icon--cover">
                        <use href="images/sprite.svg#cover"></use>
                      </svg>
                    </div>
                    <div class="card__back">
                      <img class="icon--avatar" src="images/avatar${shuffledNumbers[9]}.svg" alt="" />
                    </div>
                  </div>
                </div>

                <div class="card__container">
                  <div class="card" data-number="${shuffledNumbers[10]}">
                    <div class="card__front">
                      <svg class="icon--cover">
                        <use href="images/sprite.svg#cover"></use>
                      </svg>
                    </div>
                    <div class="card__back">
                      <img class="icon--avatar" src="images/avatar${shuffledNumbers[10]}.svg" alt="" />
                    </div>
                  </div>
                </div>

                <div class="card__container">
                  <div class="card" data-number="${shuffledNumbers[11]}">
                    <div class="card__front">
                      <svg class="icon--cover">
                        <use href="images/sprite.svg#cover"></use>
                      </svg>
                    </div>
                    <div class="card__back">
                      <img class="icon--avatar" src="images/avatar${shuffledNumbers[11]}.svg" alt="" />
                    </div>
                  </div>
                </div>`;

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
