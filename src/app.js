import "./style.scss";

// Import confetti -> bringing the package into the project
import confetti from "canvas-confetti";
import ColorThief from "colorthief";
const colorThief = new ColorThief();
const body = document.querySelector("body");
const urlInput = document.getElementById("url-label");
const container = document.querySelector(".container")
//const submit = document.getElementById("submit");
console.log(body);
console.log(urlInput);
console.log(container);
//confetti();
const confettiButton = document.getElementById("confetti-button");
const dogImg = document.getElementById("dog-image");
console.log(dogImg);

if (dogImg.complete) {
      const color = colorThief.getColor(dogImg);
      console.log(color);
      body.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
    } else {
      dogImg.addEventListener('load', () =>{
        const color = colorThief.getColor(dogImg);
        console.log(color);
        body.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
      });
    }


const onSubmit = (event) => {
    console.log(event.target.value)
    container.innerHTML = `<img id="dog-image" src= ${event.target.value}/>`
    fireConfetti();
    //const newImg = `<img id="dog-image" src= ${event.target.value}/>`
    //const color = colorThief.getp(dogImg);
}

urlInput.addEventListener("input", onSubmit);









const fireConfetti = (event) => {
    confetti({
    particleCount: 3000,
    angle: 10,
    spread: 5000,
    origin: { 
        x: Math.random()
        //x: 0 
    }
  });
}

confettiButton.addEventListener("click", fireConfetti);

console.log("Welcome to NPM!");
