var timeLeft = 60;
var choiceA = document.createElement("button");
var choiceB = document.createElement("button");
var choiceC = document.createElement("button");
var choiceD = document.createElement("button");
var startButton = document.querySelector("#startButton");
var timeEl = document.getElementById("time");
var titleEl = document.getElementById("title");
var choicesEl = document.getElementById("choices");
var highScore = document.getElementById("viewHighscore");
// var myTimer;
var buttonAttributes = {
    style: 'background-color: var(--purple); color: white;'
}



highScore.addEventListener("click", function () {
    titleEl.textContent = "Highscores";
    startButton.hidden = true;
    choicesEl.textContent = "";
    // timeEl.textContent = "";
    timeEl.style.display = "none";
});

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

function startButtons() {
    choicesEl.textContent = "";

    choicesEl.appendChild(choiceA);
    choicesEl.appendChild(choiceB);
    choicesEl.appendChild(choiceC);
    choicesEl.appendChild(choiceD);

    choiceA.setAttribute("style", "margin: 5px; width: 60%; height: 15%;");
    choiceB.setAttribute("style", "margin: 5px; width: 60%; height: 15%;");
    choiceC.setAttribute("style", "margin: 5px; width: 60%; height: 15%;");
    choiceD.setAttribute("style", "margin: 5px; width: 60%; height: 15%;");
    return;
}

startButton.addEventListener("click", function () {
    startGame();
    startTimer();
    startButtons();
    startButton.hidden = true;
});

function startTimer() {
    timeLeft = 60;
    var timeInterval = setInterval(function () {
        if (timeLeft > 30) {
            timeEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft > 10) {
            timeEl.setAttribute("style", "color: yellow");
            timeEl.textContent = timeLeft + ' seconds remaining!';
            timeLeft--;
        } else if (timeLeft > 1) {
            timeEl.setAttribute("style", "color: red");
            timeEl.textContent = timeLeft + ' seconds remaining!!!';
            timeLeft--;
        } else if (timeLeft == 1) {
            timeEl.textContent = timeLeft + ' second remaining!!!';
            timeLeft--;
            console.log(timeLeft);
        } else {
            timeEl.textContent = 'You lost!';
            clearInterval(timeInterval);
            startButton.textContent = "Play again?";
            startButton.hidden = false;
        }
    }, 1000);
    timeEl.textContent = '';
    return;
}; clearInterval(timeInterval);


function startGame() {

};

// Need to create function to replace screen content as game is played

