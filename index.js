var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomImg1 = "images/dice" + randomNumber1 + ".png"
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var randomImg2 = "images/dice" + randomNumber2 + ".png"

document.querySelector(".img1").setAttribute("src", randomImg1);
document.querySelector(".img2").setAttribute("src", randomImg2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "Player 1 Wins! 🚩"
} else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerText = "Draw!"
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerText = "Player 2 Wins! 🚩"
}