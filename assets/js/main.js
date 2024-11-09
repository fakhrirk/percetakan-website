// const currentLocation = window.location.href;
// const navbarLinks = document.querySelectorAll("navigation a");

// navbarLinks.forEach((link) => {
//   if (link.href === currentLocation) {
//     link.classList.add("active");
//   }
// });

// scroll to top
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var scrollToTopButton = document.getElementById("scrollToTop");
  var navbar = document.querySelector("header");

  if (document.body.scrollTop > navbar.offsetHeight || document.documentElement.scrollTop > navbar.offsetHeight) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
}

document.getElementById("scrollToTop").onclick = function () {
  scrollToTop();
};

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// navbar script

function munculSideBar() {
  const sideBar = document.querySelector(".sidebar");
  sideBar.style.display = "flex";
}

function hilangSideBar() {
  const sideBar = document.querySelector(".sidebar");
  sideBar.style.display = "none";
}
