var timeLeft = 60;
var timeInterval = timeInterval;
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
var verify = document.getElementById("rightWrong");
verify.setAttribute("style", "font-size: 30px");


var buttonAttributes = {
    style: 'background-color: var(--purple); color: white; margin: 5px; width: 60%; height: 15%;'
}
var startAttributes = {
    style: 'background-color: var(--purple); color: white;'
}

startButton.addEventListener("click", function () {
    startTimer();
    startGamePage1();
    startButton.hidden = true;
});


function startTimer() {
    timeInterval = setInterval(function () {
        if (timeLeft > 30) {
            timeEl.setAttribute("style", "color: green");
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
            choicesEl.textContent = 'GAME OVER';
            timeEl.textContent = 'You lost!';
            titleEl.textContent = 'HISTORY QUIZ';
            clearInterval(timeInterval);
            startButton.textContent = "Play again?";
            startButton.hidden = false;
        }
    }, 1000);
    timeEl.textContent = '';
    return;
};

function startGamePage1() {
    choicesEl.textContent = "";
    titleEl.textContent = "In what year did WWII end?";

    choicesEl.appendChild(choiceA);
    choicesEl.appendChild(choiceB);
    choicesEl.appendChild(choiceC);
    choicesEl.appendChild(choiceD);

    choiceA.setAttribute("style", "margin: 5px; width: 60%; height: 15%;");
    choiceB.setAttribute("style", "margin: 5px; width: 60%; height: 15%;");
    choiceC.setAttribute("style", "margin: 5px; width: 60%; height: 15%;");
    choiceD.setAttribute("style", "margin: 5px; width: 60%; height: 15%;");

    choiceA.textContent = "1940";
    choiceB.textContent = "1941";
    choiceC.textContent = "1945";
    choiceD.textContent = "1948";

    choiceA.addEventListener("click", function () {
        if ((choiceA.textContent == "1940")) {
            verify.textContent = "Incorrect, try again.";
            timeLeft -= 5;
        }
    });
    choiceB.addEventListener("click", function () {
        if ((choiceB.textContent == "1941")) {
            verify.textContent = "Incorrect, try again.";
            timeLeft -= 5;
        }
    });
    choiceC.addEventListener("click", function () {
        if ((choiceC.textContent == "1945")) {
            verify.textContent = "Correct!";

            page2();
        }
    });
    choiceD.addEventListener("click", function () {
        if ((choiceD.textContent == "1948")) {
            verify.textContent = "Incorrect, try again.";
            timeLeft -= 5;
        }
    });
};

function page2() {
    choicesEl.textContent = "";
    titleEl.textContent = "In what country was the battle of Hastings fought?";

    choicesEl.appendChild(choiceA);
    choicesEl.appendChild(choiceB);
    choicesEl.appendChild(choiceC);
    choicesEl.appendChild(choiceD);

    choiceA.setAttribute("style", "margin: 5px; width: 60%; height: 15%;");
    choiceB.setAttribute("style", "margin: 5px; width: 60%; height: 15%;");
    choiceC.setAttribute("style", "margin: 5px; width: 60%; height: 15%;");
    choiceD.setAttribute("style", "margin: 5px; width: 60%; height: 15%;");

    choiceA.textContent = "France";
    choiceB.textContent = "Germany";
    choiceC.textContent = "Spain";
    choiceD.textContent = "England";

    choiceA.addEventListener("click", function () {
        if ((choiceA.textContent == "France")) {
            verify.textContent = "Incorrect, try again.";
            timeLeft -= 5;
        }
    });
    choiceB.addEventListener("click", function () {
        if ((choiceB.textContent == "Germany")) {
            verify.textContent = "Incorrect, try again.";
            timeLeft -= 5;
        }
    });
    choiceC.addEventListener("click", function () {
        if ((choiceC.textContent == "Spain")) {
            verify.textContent = "Incorrect, try again.";
            timeLeft -= 5;
        }
    });
    choiceD.addEventListener("click", function () {
        if ((choiceD.textContent == "England")) {
            verify.textContent = "Correct!";
            page3();
        }
    });
};

function page3() {
    choicesEl.textContent = "";
    titleEl.textContent = "In what year did the Wright brothers first take flight?";

    choicesEl.appendChild(choiceA);
    choicesEl.appendChild(choiceB);
    choicesEl.appendChild(choiceC);
    choicesEl.appendChild(choiceD);

    choiceA.setAttribute("style", "margin: 5px; width: 60%; height: 15%;");
    choiceB.setAttribute("style", "margin: 5px; width: 60%; height: 15%;");
    choiceC.setAttribute("style", "margin: 5px; width: 60%; height: 15%;");
    choiceD.setAttribute("style", "margin: 5px; width: 60%; height: 15%;");

    choiceA.textContent = "1888";
    choiceB.textContent = "1903";
    choiceC.textContent = "1917";
    choiceD.textContent = "1922";

    choiceA.addEventListener("click", function () {
        if ((choiceA.textContent == "1888")) {
            verify.textContent = "Incorrect, try again.";
            timeLeft -= 5;
        }
    });
    choiceB.addEventListener("click", function () {
        if ((choiceB.textContent == "1903")) {
            verify.textContent = "Correct!";
            page4();
        }
    });
    choiceC.addEventListener("click", function () {
        if ((choiceC.textContent == "1917")) {
            verify.textContent = "Incorrect, try again.";
            timeLeft -= 5;
        }
    });
    choiceD.addEventListener("click", function () {
        if ((choiceD.textContent == "1922")) {
            verify.textContent = "Incorrect, try again.";
            timeLeft -= 5;
        }
    });
};

function page4() {
    choicesEl.textContent = "";
    titleEl.textContent = "How many wives did Henry VIII have?";

    choicesEl.appendChild(choiceA);
    choicesEl.appendChild(choiceB);
    choicesEl.appendChild(choiceC);
    choicesEl.appendChild(choiceD);

    choiceA.setAttribute("style", "margin: 5px; width: 60%; height: 15%;");
    choiceB.setAttribute("style", "margin: 5px; width: 60%; height: 15%;");
    choiceC.setAttribute("style", "margin: 5px; width: 60%; height: 15%;");
    choiceD.setAttribute("style", "margin: 5px; width: 60%; height: 15%;");

    choiceA.textContent = "2";
    choiceB.textContent = "4";
    choiceC.textContent = "5";
    choiceD.textContent = "6";

    choiceA.addEventListener("click", function () {
        if ((choiceA.textContent == "2")) {
            verify.textContent = "Incorrect, try again.";
            timeLeft -= 5;
        }
    });
    choiceB.addEventListener("click", function () {
        if ((choiceB.textContent == "4")) {
            verify.textContent = "Incorrect, try again.";
            timeLeft -= 5;
        }
    });
    choiceC.addEventListener("click", function () {
        if ((choiceC.textContent == "5")) {
            verify.textContent = "Incorrect, try again.";
            timeLeft -= 5;
        }
    });
    choiceD.addEventListener("click", function () {
        if ((choiceD.textContent == "6")) {
            verify.textContent = "Correct!";
            page5();
        }
    });
};

function page5() {
    choicesEl.textContent = "";
    titleEl.textContent = "In what year was the United States Constitution ratified?";

    choicesEl.appendChild(choiceA);
    choicesEl.appendChild(choiceB);
    choicesEl.appendChild(choiceC);
    choicesEl.appendChild(choiceD);

    choiceA.setAttribute("style", "margin: 5px; width: 60%; height: 15%;");
    choiceB.setAttribute("style", "margin: 5px; width: 60%; height: 15%;");
    choiceC.setAttribute("style", "margin: 5px; width: 60%; height: 15%;");
    choiceD.setAttribute("style", "margin: 5px; width: 60%; height: 15%;");

    choiceA.textContent = "1788";
    choiceB.textContent = "1792";
    choiceC.textContent = "1800";
    choiceD.textContent = "1812";

    choiceA.addEventListener("click", function () {
        if ((choiceA.textContent == "1788")) {
            timeEl.textContent = "YOU WON!";
            localStorage.setItem("Highscore", timeLeft);
            clearInterval(timeInterval);
            initials();
        }
    });
    choiceB.addEventListener("click", function () {
        if ((choiceB.textContent == "1792")) {
            verify.textContent = "Incorrect, try again.";
            timeLeft -= 5;
        }
    });
    choiceC.addEventListener("click", function () {
        if ((choiceC.textContent == "1800")) {
            verify.textContent = "Incorrect, try again.";
            timeLeft -= 5;
        }
    });
    choiceD.addEventListener("click", function () {
        if ((choiceD.textContent == "1812")) {
            verify.textContent = "Incorrect, try again.";
            timeLeft -= 5;
        }
    });
};

function highScore1() {
    verify.appendChild(choiceA);
    verify.appendChild(choiceB);
    choiceA.textContent = "Start Over";
    choiceB.textContent = "Clear Highscores";
    titleEl.textContent = "Highscores";
    startButton.hidden = true;
    choicesEl.textContent = "";
    timeEl.style.display = "none";
}

function initials() {
    score = localStorage.getItem("Highscore");
    timeEl.textContent = "YOU WON!";
    timeEl.setAttribute("style", "color: green");
    titleEl.textContent = "Enter your initials below to save your highscore!"
    verify.textContent = "Your score was " + score + "!";
    highScore();
}

highScore.addEventListener("click", function () {
    if (confirm("Are you sure you want to leave this page?")) {
        highScore1();
    } else;
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


