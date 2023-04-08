var timeLeft = 60;
var button = "button";
var choiceA = document.createElement("button");
var choiceB = document.createElement("button");
var choiceC = document.createElement("button");
var choiceD = document.createElement("button");
var choice = [choiceA, choiceB, choiceC, choiceD];
var startButton = document.querySelector("#startButton");
var timeEl = document.getElementById("time");
var titleEl = document.getElementById("title");
var choicesEl = document.getElementById("choices");
var highScore = document.getElementById("viewHighscore");
// var myTimer;
var buttonAttributes = {
    style: 'background-color: var(--purple); color: white; margin: 5px; width: 60%; height: 15%;'
}
var startAttributes = {
    style: 'background-color: var(--purple); color: white;'
}



highScore.addEventListener("click", function () {
    titleEl.textContent = "Highscores";
    startButton.hidden = true;
    choicesEl.textContent = "";
    timeEl.style.display = "none";
});

startButton.addEventListener("mouseover", function () {
    buttonChange(startButton, startAttributes)
    function buttonChange(element, startAttributes) {
        Object.keys(startAttributes).forEach(attribute => {
            element.setAttribute(attribute, startAttributes[attribute]);
        });
    }
    startButton.addEventListener("mouseout", function () {
        startButton.setAttribute("style", "background-color: ");
    })
});

choiceA.addEventListener("mouseover", function () {
buttonChange(choiceA, buttonAttributes)
    function buttonChange(element, buttonAttributes) {
        Object.keys(buttonAttributes).forEach(attribute => {
            element.setAttribute(attribute, buttonAttributes[attribute]);
        });
    }
    choiceA.addEventListener("mouseleave", function () {
        choiceA.setAttribute("style", "background-color: margin: 5px; width: 60%; height: 15%;");
    })
});

choiceB.addEventListener("mouseover", function () {
    buttonChange(choiceB, buttonAttributes)
    function buttonChange(element, buttonAttributes) {
        Object.keys(buttonAttributes).forEach(attribute => {
            element.setAttribute(attribute, buttonAttributes[attribute]);
        });
    }
    choiceB.addEventListener("mouseout", function () {
        choiceB.setAttribute("style", "background-color: margin: 5px; width: 60%; height: 15%;");
    })
});

choiceC.addEventListener("mouseover", function () {
    buttonChange(choiceC, buttonAttributes)
    function buttonChange(element, buttonAttributes) {
        Object.keys(buttonAttributes).forEach(attribute => {
            element.setAttribute(attribute, buttonAttributes[attribute]);
        });
    }
    choiceC.addEventListener("mouseout", function () {
        choiceC.setAttribute("style", "background-color: margin: 5px; width: 60%; height: 15%;");
    })
});

choiceD.addEventListener("mouseover", function () {
    buttonChange(choiceD, buttonAttributes)
    function buttonChange(element, buttonAttributes) {
        Object.keys(buttonAttributes).forEach(attribute => {
            element.setAttribute(attribute, buttonAttributes[attribute]);
        });
    }
    choiceD.addEventListener("mouseout", function () {
        choiceD.setAttribute("style", "background-color: margin: 5px; width: 60%; height: 15%;");
    })
});

function startGame() {
    choicesEl.textContent = "";
    titleEl.textContent = "What year did WWII end?";

    choicesEl.appendChild(choiceA);
    choicesEl.appendChild(choiceB);
    choicesEl.appendChild(choiceC);
    choicesEl.appendChild(choiceD);

    choiceA.setAttribute("style", "margin: 5px; width: 60%; height: 15%;");
    choiceB.setAttribute("style", "margin: 5px; width: 60%; height: 15%;");
    choiceC.setAttribute("style", "margin: 5px; width: 60%; height: 15%;");
    choiceD.setAttribute("style", "margin: 5px; width: 60%; height: 15%;");

    choiceA.textContent = "1943";
    choiceB.textContent = "1944";
    choiceC.textContent = "1945";
    choiceD.textContent = "1946";     
};

    




startButton.addEventListener("click", function () {
    startTimer();
    startGame();
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
};



