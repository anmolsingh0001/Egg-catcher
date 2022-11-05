const Name = document.getElementById("player");
const gameBody = document.getElementById("game-body");
Name.innerHTML="Player: "+localStorage.getItem("Player Name");
const $lives = document.getElementById("lives");
var seconds = document.getElementById("timer").textContent;

const basket = document.getElementById("basket");

let mov = 15;

const move1 = document.getElementById("left");
const move2 = document.getElementById("right");



move1.onclick=()=>{
  right();
}

move2.onclick=()=>{
  left();
}

document.onkeydown = function (e) {
  console.log("Key code is: ", e.keyCode)
  if (e.keyCode == 39) { 

      left();
  }
  else if (e.keyCode == 37) {   
      right();
  }
  
}


function left (){
  
  basket.style.left =  mov + "1px";
  mov+=15;
}

 function right (){
  basket.style.left = mov + "1px";
  mov-=15;
 }

var eggId = 0;


const img = [
    "eg1-removebg-preview.png",
    "eg2-removebg-preview.png",
    "eg3-removebg-preview.png",
    "eg5-removebg-preview.png",
    "eg6-removebg-preview.png",
];

const maxlives = 3;
var lives = 3;

function makeegg(){
    randomImage = img[getRandomInt(0,img.length)];
    gameBody.innerHTML += `<img src="./assets/${randomImage}" class="egg-image" id="egg${eggId}">`;
    let egg = document.getElementById("egg" + eggId);
  egg.style.transform = `translateX(${getRandomInt(20, 80)}vw)`;
  egg.style.animationDuration = `${getRandomInt(2, 6)}s`;
  
}

function checkCollision(egg) {
    if (egg.getBoundingClientRect().bottom < 0) {
      lives--;
      return true;
    }
    return false;
  }

  function eggDestruct(egg) {
    egg.style.display = "none";
    eggId++;
    makeegg();
  }


  var timer = setInterval(function () {
    seconds--;
    document.getElementById("timer").textContent = seconds;
    let egg = document.getElementById("egg" + eggId);
    if (checkCollision(egg) == true) {
      eggDestruct(egg);
      if (lives == 0) {
        clearInterval(timer);
        location.href = "./gameover.html";
      }
    }
    if (seconds == 0) {
      clearInterval(timer);
      location.href = "./win.html";
    }
  }, 1000);

  makeegg(eggId);


  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
  }