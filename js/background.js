const body = document.querySelector("body");

const images = ["uni1.jpg", "uni3.jpg", "uni4.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement('img');
bgImg.src = `img/${chosenImage}`;
bgImg.classList.add("bgImg");

body.appendChild(bgImg);


