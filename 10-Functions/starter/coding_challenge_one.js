'use strict';

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    let answer = Number(prompt(`${this.question}\n${this.options.join('\n')}`));
    typeof answer === 'number' &&
      answer < 4 &&
      answer > -1 &&
      this.answers[answer]++;
    this.displayResults('');
  },
  displayResults(type = 'array') {
    if (Array.isArray(type)) {
      console.log(this.answers);
    } else if (typeof type === 'string') {
      console.log(`Poll results are: ${this.answers.join(', ')}`);
    }
  },
};

const mySecond = {
  answers: [1, 5, 3, 9, 6, 1],
};

const displayResults = poll.displayResults;
displayResults.apply({ answers: [5, 2, 3] });
displayResults.call(mySecond);

const myFunc = displayResults.bind(mySecond);
myFunc([1, 5, 3, 9, 6, 1]);

displayResults.call(mySecond, 'string');

myFunc('[1, 5, 3, 9, 6, 1]');
myFunc([1, 5, 3, 9, 6, 1]);

// poll.bind(testObj);

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));
