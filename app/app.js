const mobileBtnEl = document.querySelector(".mobile");
const mobileNavMenuEl = document.querySelector(".navigation-menu");

mobileBtnEl.addEventListener("click", () => {
  if (mobileBtnEl.classList.contains("open")) {
    mobileBtnEl.classList.remove("open");
    mobileNavMenuEl.style.visibility = "hidden";
  } else {
    mobileBtnEl.classList.add("open");
    mobileNavMenuEl.style.visibility = "visible";
  }
});
