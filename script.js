"use strict";

document.addEventListener("DOMContentLoaded", function (){
const toggleBtn = document.getElementById("themeToggle");

    toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    })

});