const toggleButton = document.getElementById("toggle-button");
const menuList = document.getElementById("menu-list");
const contactForm = document.getElementById("contact-form");



toggleButton.addEventListener("click", function showMenu() {
	menuList.classList.toggle("active");
	toggleButton.classList.toggle("active");
})

document.querySelectorAll(".menu-item").forEach(n => n.addEventListener("click", () => {
  menuList.classList.remove("active");
  toggleButton.classList.remove("active");
}))




contactForm.addEventListener('submit', e => {
    e.preventDefault();

    var username = document.getElementById('username').value.trim();
		var address = document.getElementById('address').value.trim();
		var message = document.querySelector('.message-area').value.trim();

    confirm ("Do you want to send this message to MU Shopping Mall?\n\n" + "From: " + username + "\nAddress: " + address + "\nContent: " + message);
});




////////////////////////////////////////////////////
function showPopup() {
	alert ("Message sent successfully.",);
}
