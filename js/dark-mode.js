const toggleSwitch = document.querySelector('.toggle-btn input[type="checkbox"]');
const $html = document.querySelector('html')

function darkMode(value) {
    if (value === "true") {
        $html.classList.toggle("dark-mode", true);
        document.getElementById("banner-logo").src = "images/logo_aqua.svg";
        sessionStorage.setItem("dark-mode", "true");
    } else {
        $html.classList.toggle("dark-mode", false);
        document.getElementById("banner-logo").src = "images/logo_flame.svg";
        sessionStorage.setItem("dark-mode", "false");
    }
}

function toggleSwitchDarkMode() {
    if (toggleSwitch.checked) {
        darkMode("true")
        console.log(sessionStorage)
    } else {
        darkMode("false")
        console.log(sessionStorage)
    }
}

window.onload = function () {
    var dark_mode = sessionStorage.getItem("dark-mode");
    console.log(dark_mode)
    if (dark_mode === "true") {
        console.log("n ta falso esse kct")
        document.getElementById("dark-mode-check-box").checked = true;
        darkMode("true")
    } else {
        console.log("ta falso esse kct")
        document.getElementById("dark-mode-check-box").checked = false;
        darkMode("false")
    }
}