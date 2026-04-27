"use strict";

document.addEventListener("DOMContentLoaded", function (){

    //Dark Mode
    const toggleBtn = document.getElementById("themeToggle");

    console.log("toggleBtn:", toggleBtn);

    if (toggleBtn) {
        toggleBtn.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
        });
    } else {
        console.log("ERROR: themeToggle button not found");
    }


    // Game
    const form = document.getElementById("gameForm");
    const guessInput = document.getElementById("guessInput");

    const playerGuess = document.getElementById("playerGuess");
    const computerNumber = document.getElementById("computerNumber");
    const feedbackMessage = document.getElementById("feedbackMessage");
    const guessError = document.getElementById("guessError");

    console.log(form);

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            guessError.textContent = "";

            let userGuess = Number(guessInput.value);

            // validation
            if (
                guessInput.value === "" ||
                isNaN(userGuess) ||
                userGuess < 1 ||
                userGuess > 10
            ) {
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
    }


    // Form

    // get the form
    const contactForm = document.getElementById("contactForm");

    // get all inputs
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const comments = document.getElementById("comments");

    // get all error message spans
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const contactError = document.getElementById("contactError");
    const commentsError = document.getElementById("commentsError");

    // message that shows after submit
    const formMessage = document.getElementById("formMessage");


    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {

            console.log("FORM SUBMITTED");

            // stop page from refreshing
            e.preventDefault();

            // clear old error messages
            nameError.textContent = "";
            emailError.textContent = "";
            phoneError.textContent = "";
            contactError.textContent = "";
            commentsError.textContent = "";
            formMessage.textContent = "";

            // check which contact method is selected
            const contactMethod = document.querySelector('input[name="contactMethod"]:checked');

            // this helps track if the form is valid or not
            let isValid = true;

            // check if name is empty
            if (name.value.trim() === "") {
                nameError.textContent = "Please enter your name.";
                isValid = false;
            }

            // check if comments are empty
            if (comments.value.trim() === "") {
                commentsError.textContent = "Please enter a comment.";
                isValid = false;
            }

            // check if user picked a contact method
            if (!contactMethod) {
                contactError.textContent = "Please choose how you want to be contacted.";
                return;
            }
            

            

            // regex for email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // if email is selected, validate email
            if (contactMethod && contactMethod.value === "email") {
                if (!emailRegex.test(email.value)) {
                    emailError.textContent = "Please enter a valid email.";
                    isValid = false;
                }
            }

            // regex for phone (10 digits)
            const phoneRegex = /^[0-9]{10}$/;

            // if phone is selected, validate phone
            if (contactMethod && contactMethod.value === "phone") {
                if (!phoneRegex.test(phone.value)) {
                    phoneError.textContent = "Please enter a 10-digit phone number.";
                    isValid = false;
                }
            }

            // if anything is wrong, stop here
            if (!isValid) return;

            // create an object with the user's info
            const customer = {
                name: name.value,
                email: email.value,
                phone: phone.value,
                contactMethod: contactMethod.value,
                comments: comments.value
            };

            // show success message using their info
            formMessage.innerHTML =
                "Thanks " + customer.name + "! We'll contact you via " + customer.contactMethod + "!";

            // reset the form after submission
            contactForm.reset();

        });
    }

});