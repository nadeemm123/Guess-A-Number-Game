"use strict";
const number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("No Number!");
  } else if (guess === number) {
    displayMessage("Corect Number");
    document.querySelector(".number").textContent = number;
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > number ? "Too high 📈" : "Too Low 📉";
      displayMessage(guess > number ? "Too high 📈" : "Too Low 📉");
      document.querySelector(".message").style.color = "blue";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You Lost The Game");
      document.querySelector(".message").style.color = "red";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".score").textContent = 20;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  displayMessage("Start guessing...");
  document.querySelector("body").style.backgroundColor = "#222222";
  document.querySelector(".message").style.color = "white";
});
