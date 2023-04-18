const nav = document.querySelector("#nav");
const header = document.querySelector("#header");
const toggleBtn = document.querySelector("#toggleHeader");
const overlay = document.querySelector("#overlay");
const bars = document.querySelector("#bars");
const xmark = document.querySelector("#xmark");

toggleBtn.addEventListener("click", toggleHeader);
overlay.addEventListener("click", toggleHeader);
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.style.background = "#292929";
  } else {
    header.style.background = "transparent";
  }
});
function toggleHeader() {
  if (nav.classList.contains("right")) {
    nav.style.right = "-100%";
    nav.classList.remove("right");
    nav.classList.remove("-right-full");
    overlay.classList.remove("block");
    overlay.classList.add("hidden");
    xmark.style.display = "none";
    bars.style.display = "block";
  } else {
    xmark.style.display = "block";
    bars.style.display = "none";
    nav.classList.remove("-right-full");
    nav.classList.add("right");
    nav.style.right = "0";
    nav.classList.remove("-right-full");
    nav.classList.add("right-0");
    overlay.classList.add("block");
    overlay.classList.remove("hidden");
  }
}
