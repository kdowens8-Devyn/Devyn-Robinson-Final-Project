"use strict";

document.addEventListener("DOMContentLoaded", function (){

    //Dark Mode
const toggleBtn = document.getElementById("themeToggle");

    toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    })


    // Game
    const form = document.getElementById("gameForm");
    const guessInput = document.getElementById("guessInput");

    const playerGuess = document.getElementById("playerGuess");
    const computerNumber = document.getElementById("computerNumber");
    const feedbackMessage = document.getElementById("feedbackMessage");
    const guessError = document.getElementById("guessError");

    console.log(form);

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        
        guessError.textContent = "";

        let userGuess = Number(guessInput.value);

        // validation
        if (!userGuess || userGuess < 1 || userGuess > 10) {
            guessError.textContent = "Please enter a number between 1 and 10.";
            return;
        }

        // generate random number
        let randomNum = Math.floor(Math.random() * 10) + 1;

        // display values
        playerGuess.textContent = userGuess;
        computerNumber.textContent = randomNum;

        // check win/lose
        if (userGuess === randomNum) {
            feedbackMessage.textContent = "You win!";
        } else {
            feedbackMessage.textContent = "Try again!";
        }

        // reset input
        guessInput.value = "";
    });



});

