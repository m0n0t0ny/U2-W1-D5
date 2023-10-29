document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  const getStarted = document.querySelector("#get-started");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      header.classList.add("white-bg");
      getStarted.classList.add("green-bg");
    } else {
      header.classList.remove("white-bg");
      getStarted.classList.remove("green-bg");
    }
  });
});

/* TODO header M should appear and disappear like in the original website */

// svg M spawner/despawner

// function toggleOpacityInfinite() {
//   document.addEventListener("DOMContentLoaded", function () {
//     const allM = document.querySelectorAll("g");

//     allM.forEach((M) => {
//       const appearTime = Math.floor(Math.random() * 5000); // Rounded to the nearest integer
//       const disappearTime = Math.floor(Math.random() * 5000); // Rounded to the nearest integer

//       M.style.opacity = Math.random() < 0.5 ? 0 : 1;

//       setTimeout(makeItAppear, appearTime);
//       setTimeout(makeItDisappear, disappearTime);

//       function makeItAppear() {
//         M.style.opacity = 1;
//       }

//       function makeItDisappear() {
//         M.style.opacity = 0;
//       }
//     });

//     setTimeout(toggleOpacityInfinite, 5000);
//   });
// }

// toggleOpacityInfinite();

const allM = document.querySelectorAll("g");

function toggleM() {
  allM.forEach((M) => {
    const randomTime = Math.round(Math.random() * 30000);
    setTimeout(function () {
      const toggleOpacity = Math.round(Math.random() * 2);
      M.style.opacity = toggleOpacity;
    }, randomTime);
  });

  setInterval(toggleM, 60000);
}
toggleM();
