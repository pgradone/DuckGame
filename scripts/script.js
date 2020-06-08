// define the shooting crosshair
const crossHair = document.querySelector('.crosshair');
const waitTime = 30000;
let waitTimer;
let topValue;
let leftValue;
let playerOneScore = 0;
let playerTwoScore = 0;

gameStart();

document.querySelector('button').addEventListener('click', gameStart);

function gameStart() {
  crossHair.style.backgroundColor = '';
  topValue = 40;
  leftValue = 40;
  crossHair.style.top = topValue + '%';
  crossHair.style.left = leftValue + '%';
  document.addEventListener('keydown', move);
  crossHair.addEventListener('click', crosshairTouched);
  waitTimer = setTimeout(playerTwoWins, waitTime);
}

function gameFinish() {
  document.removeEventListener('keydown', move);
  crossHair.removeEventListener('click', crosshairTouched);
  clearTimeout(waitTimer);
}

function move(event) {
  console.log(event.code);
  if (event.code === 'ArrowDown') {
    topValue += 10;
  }
  if (topValue > 90) {
    topValue = 0;
  }
  if (event.code === 'ArrowUp') {
    topValue -= 10;
  }
  if (topValue < 0) {
    topValue = 90;
  }
  if (event.code === 'ArrowRight') {
    leftValue += 10;
  }
  if (leftValue > 90) {
    leftValue = 0;
  }
  if (event.code === 'ArrowLeft') {
    leftValue -= 10;
  }
  if (leftValue < 0) {
    leftValue = 90;
  }
  crossHair.style.top = topValue + '%';
  crossHair.style.left = leftValue + '%';
}

function crosshairTouched() {
  crossHair.style.backgroundColor = 'red';
  playerOneWins();
}
function playerOneWins() {
  alert('Player One Wins!');
  gameFinish();
  playerOneScore += 1;
  // playerOneScore = playerOneScore + 1;
  document.querySelector('#player1').innerHTML = playerOneScore;
}

function playerTwoWins() {
  crossHair.style.backgroundColor = 'green';
  alert('Player Two Wins!');
  gameFinish();
  playerTwoScore += 1;
  document.querySelector('#player2').innerHTML = playerTwoScore;
}

// const docBody = document.querySelector('body');

// docBody.addEventListener('mousemove', function(evnt) {
//     crossHair.style.left = evnt.clientX + 'px';
//     crossHair.style.top = evnt.clientY + 'px';
// })

crossHair.addEventListener('mouseover', function (evnt) {
  crossHair.style.backgroundColor = 'lightblue';
});

crossHair.addEventListener('mouseleave', function (evnt) {
  crossHair.style.backgroundColor = 'white';
});
