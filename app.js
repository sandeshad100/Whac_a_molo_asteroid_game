const squares = document.querySelectorAll('.square');
const timeLeft = document.getElementById('time-left');
const score = document.getElementById('score');
const mole = document.getElementById('.mole');

let result = 0;
let hitPosition;
let currentTime = 30;
let timerId = null;



function randomSquare() {
    squares.forEach((square) => {
        square.classList.remove('mole');
    });

    let randomSquareDisplay = squares[Math.floor(Math.random() * 9)];
    randomSquareDisplay.classList.add('mole');
    hitPosition = randomSquareDisplay.id;


}

squares.forEach((squ) => {
    squ.addEventListener('mousedown', () => {
        if (squ.id == hitPosition) {
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    });
});

function moveMole() {
    timerId = setInterval(randomSquare, 
        700);
}
moveMole();

// timer
function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if (currentTime == 0) {
        clearInterval(timerId);
        clearInterval(countDowntimerId);
        alert("Game over and your score is " + result);
        alert("Start Again");
        window.location.reload();
        
    }
}

countDowntimerId = setInterval(countDown, 1000);


