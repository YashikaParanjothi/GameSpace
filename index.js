// simon


//drum Kit
var noOfDrumButtons = document.querySelectorAll("#drum .drum").length;

//Detecting button press
for (var i = 0; i < noOfDrumButtons; i++) {
  document.querySelectorAll("#drum .drum")[i].addEventListener("click", function() {
    makesound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

//Detecting keyboard press
document.addEventListener("keydown", function(event) {
  makesound(event.key);
  buttonAnimation(event.key);
});

function makesound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default: console.log(key);
  }
}
function buttonAnimation(currentKey){
  document.querySelector("."+currentKey).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("."+currentKey).classList.remove("pressed");
  },100);
}

//Dice Roll
//Random number for dice1
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
var image1 = document.querySelectorAll("#dice img")[0];
image1.setAttribute("src", randomImageSource);

//Random number for dice2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
console.log(randomImageSource2);
document.querySelectorAll("#dice img")[1].setAttribute("src", randomImageSource2);


//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("#dice h1").innerHTML = "🚩 Play 1 Wins!";
}
//If player 2 wins
else if (randomNumber2 > randomNumber1) {
  document.querySelector("#dice h1").innerHTML = "Player 2 Wins! 🚩";
}
//If the match ends in a draw
else {
  document.querySelector("#dice h1").innerHTML = "Draw!";
}
