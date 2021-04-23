'use script'

const secretNumber = Math.trunc(Math.radom() * 20) + 1;
const number = document.querySelector('.number');

const btnCheck = document.querySelector('.check');
const message = document.querySelector('.message');



number.textContent = secretNumber;
var score = 20;
var displayScore = document.querySelector('.score');
displayScore.textContent = score;

btnCheck.addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    if (guess > 0) {
        if (guess = secretNumber) {
            message.textcontext = 'your number is correct';
        } else if (guess > secretNumber) {
            message.textcontext = 'your number is high';
        } else if (guess < secretNumber) {
            message.textcontext = 'your number is low';
        }
    } else {
        message.textcontext = 'Provide Right Input';
    }

});