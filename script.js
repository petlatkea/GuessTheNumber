"use strict";

window.addEventListener("load", start);

let num;

function start() {
  console.log("JavaScript is running!");
  num = generateRandomNumber();
  document
    .querySelector("#guess-form")
    .addEventListener("submit", receiveGuess);
}

function generateRandomNumber() {
  return 42;
}

function receiveGuess(event) {
  event.preventDefault();

  const form = event.target;
  const value = form.guess.valueAsNumber;
  console.log("Received guess");
  console.log(value);
  checkGuess(value);
}

function checkGuess(guess) {
  if (guess === num) {
    guessIsCorrect(guess);
  } else if (guess < num) {
    guessIsTooLow(guess);
  } else {
    guessIsTooHigh(guess);
  }
}

function guessIsCorrect(guess) {
  console.log("correct");
  const list = document.querySelector("#guess-list");
  const html = `<li>You guessed correctly - the number was ${guess}</li>`;
  list.insertAdjacentHTML("beforeend", html);
}

function guessIsTooLow(guess) {
  console.log("low");
  const list = document.querySelector("#guess-list");
  const html = `<li>You guessed ${guess} - that was too low! Try again</li>`;
  list.insertAdjacentHTML("beforeend", html);
}

function guessIsTooHigh(guess) {
  console.log("high");
  const list = document.querySelector("#guess-list");
  const html = `<li>You guessed ${guess} - that was too high! Try again</li>`;
  list.insertAdjacentHTML("beforeend", html);
}
