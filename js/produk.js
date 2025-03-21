function scrollFunction() {
  var scrollToTopButton = document.getElementById("scrollToTop");
  var navbar = document.querySelector("nav");

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

function loginFrom() {
  const loginFrom = document.getElementById("login-form");
  const daftarFrom = document.getElementById("daftar-form");
  loginFrom.style.display = "flex";
  daftarFrom.style.display = "none";
}
function closeLoginFrom() {
  const loginFrom = document.getElementById("login-form");
  loginFrom.style.display = "none";
}
function closeDaftarFrom() {
  const loginFrom = document.getElementById("daftar-form");
  loginFrom.style.display = "none";
}
function daftarFrom() {
  const daftarFrom = document.getElementById("daftar-form");
  const loginFrom = document.getElementById("login-form");
  loginFrom.style.display = "none";
  daftarFrom.style.display = "flex";
}
