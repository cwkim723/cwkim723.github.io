const greeting = document.querySelector("#greeting");

const savedUsername = localStorage.getItem("username");
console.log('savedUsername,', savedUsername)

greeting.innerText = `Welcome to your space, ${savedUsername}`;

// if (savedUsername === null) {
//   greeting.innerText = "No Username. Please enter your name."
// } else{
//   greeting.innerText = `Hello ${username}`;
// }