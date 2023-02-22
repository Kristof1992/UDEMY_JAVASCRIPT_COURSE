'use sctrict';

document.querySelector('.score').textContent = 20;
document.querySelector('.guess').value = '';
document.querySelector('.number').textContent = '?';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

console.log(secretNumber);

document.querySelector('.check').addEventListener('click', () => {
  console.log(secretNumber);
  const guess = Number(document.querySelector('.guess').value);
  // When guess is not falsy -> 0
  if (!guess) {
    displayMessage('⛔ Not a number');
    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // Update HighScore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = displayMessage(
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  // UPDATE VARIABLES
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  // UPDATE UI
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// *** Helper Functions ***
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};
