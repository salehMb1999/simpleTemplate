const menuBtn = document.querySelector(".mobile-menu__btn");
const menu = document.querySelector(".mobile-menu");
let isOpen = false;

menuBtn.addEventListener("click", () => {
  if (!isOpen) {
    menu.classList.add("menuActive");
    menuBtn.classList.add("btnActive");
    isOpen = true;
  } else {
    menu.classList.remove("menuActive");
    menuBtn.classList.remove("btnActive");

    isOpen = false;
  }
});
