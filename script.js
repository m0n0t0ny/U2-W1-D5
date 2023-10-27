document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  const getStarted = document.querySelector("#get-started");

  window.addEventListener("scroll", function () {
    if (window.scrollY > header.clientHeight) {
      header.classList.add("white-bg");
      getStarted.classList.add("green-bg");
    } else {
      header.classList.remove("white-bg");
      getStarted.classList.remove("green-bg");
    }
  });
});
