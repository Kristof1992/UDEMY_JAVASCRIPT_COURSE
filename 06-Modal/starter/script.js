'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(selected);

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', modalMouseEvent);
}

btnCloseModal.addEventListener('click', modalMouseEvent);
overlay.addEventListener('click', modalMouseEvent);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
});

// *** Event Handler ***
// Toggle adds a css class when not there and removes it when there.
function modalMouseEvent(event) {
  if (event.type === 'click') {
    modal.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
  }
}
