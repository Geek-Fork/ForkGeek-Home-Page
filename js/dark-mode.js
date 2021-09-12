const toggleSwitch = document.querySelector('.toggle-btn input[type="checkbox"]');
const $html = document.querySelector('html')

function darkmode() {
    if (toggleSwitch.checked) {
        $html.classList.toggle("dark-mode");
        document.getElementById("banner-logo").src="images/logo_aqua.svg";
    } else {
        $html.classList.toggle("dark-mode");
        document.getElementById("banner-logo").src="images/logo_flame.svg";
    }
}
