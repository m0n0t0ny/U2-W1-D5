const svg = document.querySelector("svg");
let ariaLabel = svg.getAttribute("aria-label");
let removeTimer, restoreTimer;

function removeM() {
  const mIndex = ariaLabel.indexOf("M");
  if (mIndex !== -1) {
    ariaLabel = ariaLabel.slice(0, mIndex) + ariaLabel.slice(mIndex + 1);
    svg.setAttribute("aria-label", ariaLabel);
    restoreTimer = setTimeout(restoreM, getRandomTime(1, 5) * 1000);
  }
}

function restoreM() {
  const mIndex = ariaLabel.indexOf(" ");
  ariaLabel =
    ariaLabel.substring(0, mIndex) + " M" + ariaLabel.substring(mIndex + 1);
  svg.setAttribute("aria-label", ariaLabel);
  removeTimer = setTimeout(removeM, getRandomTime(1, 5) * 1000);
}

function getRandomTime(min, max) {
  return Math.random() * (max - min) * 1000 + min * 1000;
}

removeTimer = setTimeout(removeM, getRandomTime(1, 5) * 1000);
