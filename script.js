// script.js
const toggleBtn = document.getElementById("toggle");

const lightIcon = document.querySelector(".fa-sun");
const darkIcon = document.querySelector(".fa-moon");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");



  if (document.body.classList.contains("light-mode")) {
    lightIcon.style.display = "none";
    darkIcon.style.display = "block";
  } else {
    lightIcon.style.display = "block";
    darkIcon.style.display = "none";
  }
});