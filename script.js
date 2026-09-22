const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const themeToggle = document.getElementById("themeToggle");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  localStorage.setItem("portfolio-theme",
    document.body.classList.contains("light") ? "light" : "dark");
});

if (localStorage.getItem("portfolio-theme") === "light") {
  document.body.classList.add("light");
}

document.getElementById("year").textContent = new Date().getFullYear();
