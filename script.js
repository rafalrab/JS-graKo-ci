'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
let roll = 0;

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

document.querySelector('.btn--roll').addEventListener('click', function () {
    roll = Math.trunc(Math.random() * 6) + 1;
    console.log(roll);
    if(roll === '1') {}
});
