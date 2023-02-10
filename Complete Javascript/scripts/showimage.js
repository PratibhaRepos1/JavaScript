/*
    Excerise: write a javascript code for swap the image when you click on image and once you click back then back to orignal image
*/

let myButton = document.querySelector("button");
let myHeading2 = document.querySelector("h2");

/* code for personalized greetings */

if (!localStorage.getItem("name")) {
  setUsername();
} else {
  const storedName = "Guest!"; //localStorage.getItem('name', 'Guest');
  myHeading2.textContent = `Hey Welcome ${storedName} Click on Button!`;
}

myButton.onclick = () => {
  setUsername();
};

function setUsername() {
  const userName = prompt("Please enter your name.");
  userName === null ? userName = 'Guest' : localStorage.setItem("name", userName);

  myHeading2.textContent = `Chrome is cool ${userName}... Let's try to click on Image!`;
}

const myImg = document.querySelector("img");
myImg.onclick = () => {
  const mysrc = myImg.getAttribute("src");
  if (mysrc === "./images/chrome1.jpeg") {
    myImg.setAttribute("src", "./images/chrome-dark.jpg");
    myHeading2.style.color = 'darkolivegreen';
  } else {
    myImg.setAttribute("src", "./images/chrome1.jpeg");
    myHeading2.style.color = 'blue';
  }
};
