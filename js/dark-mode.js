const themeButton = document.getElementById("theme-button");
var link = document.querySelector("link[rel~='icon']");
const $html = document.querySelector("html");

const selectedTheme = localStorage.getItem("selected-theme");

function darkmode() {
  if (themeButton.classList.contains("fa-fire")) {
    document.getElementById("banner-logo").src = "images/logo_aqua.svg";
    link.href = "images/favicon_aqua.ico";
    localStorage.setItem("selected-theme", "aqua");
  } else {
    document.getElementById("banner-logo").src = "images/logo_flame.svg";
    link.href = "images/favicon_flame.ico";
    localStorage.setItem("selected-theme", "flame");
  }
  themeButton.classList.toggle("fa-fire");
  themeButton.classList.toggle("fa-water");
  $html.classList.toggle("dark-mode");
}
