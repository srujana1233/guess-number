'use script'

var secretNumber = Math.trunc(Math.random() * 20) + 1;
const number = document.querySelector('.number');

const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');
const message = document.querySelector('.message');
var score = 20;
const displayScore = document.querySelector('.score');
displayScore.textContent = score;

var highScore = 0;
const displayHighScore = document.querySelector('.highscore');
displayHighScore.textContent = highScore;

btnCheck.addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    if (score > 0) {
        if (guess > 0 && guess <= 20) {
            if (guess === secretNumber) {
                message.textContext = 'your number is correct';
                document.body.style.backgroundColor = 'green';
                number.textContent = secretNumber;
                number.style.width = '30rem';

                if (score > highScore) {
                    highScore = score;
                    displayHighScore.textContent = highScore;
                }

            } else if (guess > secretNumber) {
                message.textContext = 'your number is high';
                score--;
                displayScore.textContent = score;
            } else if (guess < secretNumber) {
                message.textContext = 'your number is low';
                score--;
                displayScore.textContent = score;
            }
        } else {
            message.textContext = 'Provide Right Input';
        }
    } else {
        message.textContent = 'You lost the game';
        document.body.style.backgroundColor = 'red';
        number.textContent = secretNumber;
        number.style.width = '30rem';

        secretNumber = Math.trunc(Math.random() * 20) + 1;
        number.textContent = secretNumber;
        score = 20;
        displayScore.textContent = score;
        document.querySelector('.guess').value = '';
    }

});

btnAgain.addEventListener('click', function() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    number.textContent = secretNumber;
    score = 20;
    displayScore.textContent = score;
    message.textContent = 'Start Guessing';
    document.querySelector('.guess').value = '';
});