// 로그인 페이지 배경화면
const body = document.querySelector("body");

const images = ["uni2.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement('img');
bgImg.src = `img/${chosenImage}`;
bgImg.classList.add("bgImg");

body.appendChild(bgImg);


// 로그인 기능
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function handleLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem("username", username);
    document.location.href="main.html";
}

loginForm.addEventListener("submit", handleLoginSubmit);
