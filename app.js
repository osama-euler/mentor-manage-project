// header actions.
let imagesHeader = document.querySelector("header .image ");
let burgerIcon = document.getElementById("burger-icon");
let closeIcon = document.getElementById("close-icon");
let headerMobileList = document.getElementById("mobile-list");
let overlay = document.querySelector(".overlay");

imagesHeader.addEventListener("click", () => {
  burgerIcon.classList.toggle("toggle-burger-icon");
  closeIcon.classList.toggle("toggle-close-icon");
  headerMobileList.classList.toggle("toggle-visible");
  overlay.classList.toggle("opacity-20per-top-index");
});

// testimonials section.
let cardContainer = document.querySelector(".testimonials .content");
let cards = document.querySelectorAll(".testimonials .content .card");
let liList = document.querySelectorAll(".testimonials li");

liList.forEach((item, index) => {
  item.addEventListener("click", () => {
    liList.forEach((li) => {
      li.classList.remove("active");
    });
    item.classList.add("active");
    cards.forEach((c) => {
      c.classList.remove("top");
    });
    cards[index].classList.add("top");
  });
});

// top btn
let btn = document.getElementById("btn");
console.log(btn);

// window.addEventListener >> function it is called every time you are scrolling
// window.scrollY >> get the vertical value of scrolling
// window.innerHeight >> get the real height of the window page
window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight) {
    btn.style.cssText = `visibility:visible`;
  } else {
    btn.style.cssText = `visibility:hidden`;
  }
});
