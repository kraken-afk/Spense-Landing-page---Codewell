const hamburgerBtn = document.getElementById("hamburger");
const nav = document.querySelector(".nav");
const closeBtn = document.getElementById("closeBtn");
console.log(closeBtn);

hamburgerBtn.addEventListener("click", () => {
  nav.style.transform = "translateX(-50%) translateY(0vh)";
});

closeBtn.addEventListener("click", () => {
  nav.style.transform = "translateX(-50%) translateY(-100vh)";
});
