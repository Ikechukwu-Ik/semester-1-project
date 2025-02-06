const toggleButton = document.getElementById("toggle-button");
const menuList = document.getElementById("menu-list");

toggleButton.addEventListener("click", function showMenu() {
	menuList.classList.toggle("active");
	toggleButton.classList.toggle("active");
})

document.querySelectorAll(".menu-item").forEach(n => n.addEventListener("click", () => {
  menuList.classList.remove("active");
  toggleButton.classList.remove("active");
}))




////////////////////////////////////////////////////
function showPopup() {
	confirm ("Do you want to send this message?.",);
}