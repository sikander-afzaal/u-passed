const nav = document.querySelector("#nav");
const toggleBtn = document.querySelector("#toggleHeader");
const overlay = document.querySelector("#overlay");
const bars = document.querySelector("#bars");
const xmark = document.querySelector("#xmark");

toggleBtn.addEventListener("click", toggleHeader);
overlay.addEventListener("click", toggleHeader);

function toggleHeader() {
  if (nav.classList.contains("right-0")) {
    nav.classList.remove("right-0");
    nav.classList.add("-right-full");
    overlay.classList.remove("block");
    overlay.classList.add("hidden");
  } else {
    nav.classList.remove("-right-full");
    nav.classList.add("right-0");
    overlay.classList.add("block");
    overlay.classList.remove("hidden");
  }
}
