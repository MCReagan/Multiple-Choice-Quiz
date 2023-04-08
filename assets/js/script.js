// Need to create function to start game when game is pressed
var startButton = document.querySelector("#startButton");
var timeEl = document.getElementById("time");

var buttonAttributes = {
    style: 'background-color: var(--purple); color: white;'
}

startButton.addEventListener("mouseover", function () {
buttonChange(startButton, buttonAttributes)
    function buttonChange(element, buttonAttributes) {
        Object.keys(buttonAttributes).forEach(attribute => {
            element.setAttribute(attribute, buttonAttributes[attribute]);
        });
    }
    startButton.addEventListener("mouseout", function () {
        startButton.setAttribute("style", "background-color: ");
    })
});

startButton.addEventListener("click", function () {
    startGame();
    startTimer();
});

function startTimer() {
    var timeLeft = 31;

    var timeInterval = setInterval(function () {
        if (timeLeft > 30) {
            timeEl.textContent = timeLeft + ' seconds';
            timeLeft--;
        } else if (timeLeft > 10) {
            timeEl.setAttribute("style", "color: yellow");
            timeEl.textContent = timeLeft + ' seconds';
            timeLeft--;
        } else if (timeLeft > 1) {
            timeEl.setAttribute("style", "color: red");
            timeEl.textContent = timeLeft + ' seconds!';
            timeLeft--;
        } else if (timeLeft == 1) {
            timeEl.textContent = timeLeft + ' second!';
            timeLeft--;
            console.log(timeLeft);
        } else {
            timeEl.textContent = 'You lost!';
            clearInterval(timeInterval);
        }
    }, 1000);
    timeEl.textContent = '';
};

function startGame() {
    
};

// Need to create function to replace screen content as game is played

