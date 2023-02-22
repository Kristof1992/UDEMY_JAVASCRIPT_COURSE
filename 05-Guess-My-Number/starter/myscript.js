'use strict';

const INITIAL_SCORE = 20;
let mysteryNumber = Math.trunc(Math.random() * 20 + 1);
let highScore = 0;
let gameIsOver = false;
let currentScore = INITIAL_SCORE;
let checkButton = document.querySelector('.check');
let againBtn = document.querySelector('.again');
let guessBox = document.querySelector('.guess');

// Self-executing function. Attaching Listeners to buttons: .check, .again and keys.
(function setClickListeners() {
  checkButton.addEventListener('click', eventHandler);
  guessBox.addEventListener('keydown', eventHandler);
  againBtn.addEventListener('click', reset);
})();

// ChecksNumber
function checkNumber(num) {
  // Incorrect guess
  if (num !== mysteryNumber) {
    // Too high guess
    if (num > mysteryNumber) {
      displayMessage('📈 Number too high');
      // Too low guess
    } else {
      displayMessage('📉 Number too low');
    }
    currentScore--; // In both cases deduct one
    if (currentScore < 1) {
      gameIsOver = true;
      displayMessage('💥 Game Over');
    }
    // Correct guess
  } else {
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    // Displays the mysteryNumber
    document.querySelector('.number').textContent = mysteryNumber;
    highScore = Number(document.querySelector('.highscore').textContent);
    // Updates highScore if it's bigger than currentScore
    if (currentScore > highScore) {
      document.querySelector('.highscore').textContent =
        document.querySelector('.score').textContent;
    }
    gameIsOver = true;
  }
  //Update currentScore on UI
  document.querySelector('.score').textContent = currentScore;
}

// Function reacts only to clicks and 'enter' button presses.
// First if block checks for that.
// Second if checks if number is in the range 0-20.
function eventHandler(event) {
  if ((event.type === 'click' || event.keyCode === 13) && !gameIsOver) {
    let readInput = Number(document.querySelector('.guess').value);
    if (readInput > 0 && readInput <= 20) {
      checkNumber(readInput);
    } else {
      displayMessage(
        '🔴Number out of range please enter a number between 1-20!'
      );
    }
  }
}

// Function executes when .again button is pressed, then resets the game state
function reset() {
  // Reset currentScoreNumber
  currentScore = INITIAL_SCORE;
  // *** We can store a Number where a string is expected! ***
  document.querySelector('.score').textContent = currentScore;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  mysteryNumber = Math.trunc(Math.random() * 20 + 1);
  gameIsOver = false;
}

// *** Helper Function ***
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}
