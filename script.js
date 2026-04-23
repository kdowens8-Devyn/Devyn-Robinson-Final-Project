"use strict";

const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
})