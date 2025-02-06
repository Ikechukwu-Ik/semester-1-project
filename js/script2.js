const toggleBtn = document.querySelector(".toggle-btn");
const navMenu = document.querySelector(".navbar ul");


toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  toggleBtn.classList.remove("active");
  navMenu.classList.remove("active");
}))