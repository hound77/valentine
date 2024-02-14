const noButton = document.querySelector(".no");
const yesButton = document.querySelector(".yes");
let sizeConstraint = 2;

const performAction = () => {
  let translateX = 0;
  let translateY = 0;

  while (translateX < 180 || translateY < 180) {
    const maxX = document.documentElement.clientWidth;
    const maxY = document.documentElement.clientHeight;
    translateX = Math.random(100) * maxX * 0.6;
    translateY = Math.random() * maxY * 0.6;
  }

  noButton.style.transform = `translate(${translateX}px, ${translateY}px)`;

  yesButton.classList.add("shake");

  if (sizeConstraint>=0) {
    let currentH = parseInt(getComputedStyle(yesButton).height, 10);
    yesButton.style.height = `${currentH * 1.3}px`;
    let currentW = parseInt(getComputedStyle(yesButton).width, 10);
    yesButton.style.width = `${currentW * 1.3}px`;
    yesButton.style.fontSize = `${currentW * 0.2}px`;
    yesButton.innerHTML = yesButton.innerHTML + "😠";
    sizeConstraint--;
  }
  setTimeout(() => {
    yesButton.classList.remove("shake");
  }, 1000);
};

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get('name');

  console.log(name)

  const valentineQuestion = document.getElementById('valentineQuestion');
  valentineQuestion.textContent = `Sakshi, Will you be my Valentine?`;

  noButton.addEventListener("mouseover", () => {
    performAction();
  });

  noButton.addEventListener("click", () => {
    performAction();
  });

  
});


// function isMobile() {
//   return /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent);
// }

// function checkDeviceAndPrompt() {
//   if (isMobile()) {
//     window.location.href = "/valentine/mobile.html";
//   }
// }

window.onload = checkDeviceAndPrompt;
