// const currentLocation = window.location.href;
// const navbarLinks = document.querySelectorAll("navigation a");

// navbarLinks.forEach((link) => {
//   if (link.href === currentLocation) {
//     link.classList.add("active");
//   }
// });

// scroll to top
// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   var scrollToTopButton = document.getElementById("scrollToTop");
//   var navbar = document.querySelector("header");

//   if (document.body.scrollTop > navbar.offsetHeight || document.documentElement.scrollTop > navbar.offsetHeight) {
//     scrollToTopButton.style.display = "block";
//   } else {
//     scrollToTopButton.style.display = "none";
//   }
// }

// document.getElementById("scrollToTop").onclick = function () {
//   scrollToTop();
// };

// function scrollToTop() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }

// Event scroll untuk mendeteksi pergerakan halaman
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var scrollToTopButton = document.getElementById("scrollToTop");
  var navbar = document.querySelector("header"); // Sesuaikan jika nav bukan <header>

  // Cek apakah pengguna sudah scroll melebihi tinggi navbar
  if (document.body.scrollTop > navbar.offsetHeight || document.documentElement.scrollTop > navbar.offsetHeight) {
    if (!scrollToTopButton.classList.contains("animate-slide-up")) {
      scrollToTopButton.style.display = "block";
      scrollToTopButton.classList.remove("animate-shake-out");
      scrollToTopButton.classList.add("animate-slide-up");
    }
  } else {
    if (scrollToTopButton.classList.contains("animate-slide-up")) {
      scrollToTopButton.classList.remove("animate-slide-up");
      scrollToTopButton.classList.add("animate-shake-out");

      // Tunggu animasi selesai baru sembunyikan tombol
      setTimeout(() => {
        scrollToTopButton.style.display = "none";
      }, 500);
    }
  }
}

// Event klik untuk kembali ke atas dengan efek smooth
document.getElementById("scrollToTop").onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// navbar script

function munculSideBar() {
  const sideBar = document.querySelector(".sidebar");
  sideBar.style.display = "flex";
}

function hilangSideBar() {
  const sideBar = document.querySelector(".sidebar");
  sideBar.style.display = "none";
}
