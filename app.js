// slick slider
$(".slider-block").slick({
  autoplay: true,
  dots: true,
  dotsClass: true,
  draggable: false,
  swipe: false,
  touchMove: false,
});

// Гамбургер меню
let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".menu-wrapper");
let buttonBuy = document.querySelector(".right-column");

// console.log(mobileMenu);
// console.log(mainMenu);
// console.log(buttonBuy);

mobileMenu.addEventListener("click", function () {
  mobileMenu.classList.toggle("active-menu");
  if (mobileMenu.classList.contains("active-menu")) {
    mainMenu.classList.add("active-menu") ||
      buttonBuy.classList.add("active-menu");
  } else {
    mainMenu.classList.remove("active-menu") ||
      buttonBuy.classList.remove("active-menu");
  }
});
