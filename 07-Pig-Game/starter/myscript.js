'use strict';

let currentScore, scores, activePlayer;

// Selects a list of Elements by class name. [0:<section class= "player">, 1:<section class= "player">]
let players = document.querySelectorAll('.player');

const diceDOM = document.querySelector('.dice');
diceDOM.classList.add('hidden');

// Initializing UI state
let scoreOneDOM = document.getElementById('score--0');
let scoreTwoDOM = document.getElementById('score--1');
let currentOneDOM = document.getElementById('current--0');
let currentTwoDOM = document.getElementById('current--1');

function init() {
  // VARs
  currentScore = 0;
  scores = [0,0];
  activePlayer = 0;

  // DOMs
  scoreOneDOM.textContent = 0;
  scoreTwoDOM.textContent = 0;
  currentOneDOM.textContent = 0;
  currentTwoDOM.textContent = 0;
  diceDOM.classList.add('hidden');

  // Enabling Buttons
  document.querySelector('.btn--roll').disabled = false;
  document.querySelector('.btn--hold').disabled = false;
}
init();

// *** Click Listeners ***
// BTN - NEW GAME
document.querySelector('.btn--new').addEventListener('click', function () {
  // Resetting Data and UI
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
  init();
  diceDOM.classList.add('hidden');
  // Removing the winner player's style
  // Swaps around active players.
  switchOver();
});

// BTN - ROLL DICE
document.querySelector('.btn--roll').addEventListener('click', function () {
  // Phase I - Sets Dice visible with matching image
  const rolledNumber = Math.trunc(Math.random() * 6 + 1);
  diceDOM.src = `dice-${rolledNumber}.png`;
  diceDOM.classList.remove('hidden');
  // Phase II - Selects active player then if number is 1
  // mutualScore is set to 0 and switches over to the other player. 
  // Else rolledNumber is added to mutualScore.
  activePlayer = checkActivePlayer();
  if (rolledNumber === 1) {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    switchOver();
  } else {
    currentScore += rolledNumber;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  }
});

// BTN - HOLD
document.querySelector('.btn--hold').addEventListener('click', function () {
  let currentActivePlayer = checkActivePlayer();
  scores[currentActivePlayer] += currentScore;
  document.getElementById(`score--${currentActivePlayer}`).textContent = scores[currentActivePlayer];
  currentScore = 0;
  document.getElementById(`current--${currentActivePlayer}`).textContent = currentScore;
  // document.querySelector(currentActivePlayer.currentScoreID).textContent = currentScore;
  if(scores[currentActivePlayer] >= 20) {
    document.querySelector(`.player--${currentActivePlayer}`).classList.add('player--winner');
    document.querySelector('.btn--roll').disabled = true;
    document.querySelector('.btn--hold').disabled = true;
  } else {
    switchOver();
  }
});

// *** Helper Functions ***
// Checks active player 
// returns Player Number
function checkActivePlayer() {
  return players[0].classList.contains('player--active') ? 0 : 1;
}

// Switches active to inactive and inactive to active
function switchOver() {
    players[0].classList.toggle('player--active');
    players[1].classList.toggle('player--active');
}