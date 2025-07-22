const loading = document.createElement('div');
const spinner = document.createElement('div');
const title = document.createElement('h1');

document.body.appendChild(loading);

        loading.appendChild(spinner);
        loading.appendChild(title);

        loading.id = "loading";
        loading.style.width = "100vw";
        loading.style.height = "100vh";
        loading.style.display = "flex";
        loading.style.justifyContent = "center";
        loading.style.alignItems = "center";
        loading.style.position = "fixed";
        loading.style.top = "0";
        loading.style.left = "0";
        loading.style.zIndex = "1000";
        loading.style.fontFamily = "Arial, sans-serif";
        loading.style.fontSize = "1em";
        loading.style.color = "#fff";
        loading.style.textAlign = "center";
        loading.style.backgroundColor = "black";
        loading.id = "loading";
        loading.style.flexDirection="column"
        
        title.id = "title";
        title.innerText = "Loading";
        title.id = "title";
        title.innerText = "Loading Portfolio";
        title.style.color = "#fff";

        spinner.className = "spinner";
        spinner.style.width = "30px";
        spinner.style.height = "30px";
        spinner.style.border = "5px solid #f3f3f3";
        spinner.style.borderTop = "5px solid #6a01d4";
        spinner.style.borderRadius = "50%";
        spinner.style.animation = "spin 2s linear infinite";



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

window.onload = function () {
            setTimeout(function () {
                loading.style.display = "none";
            }, 3000);
            };