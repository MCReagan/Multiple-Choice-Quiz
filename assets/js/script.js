// Need to create function to start game when game is pressed
var startButton = document.querySelector("#startButton");
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
});


function startGame() {
    
};

// Need to create function to replace screen content as game is played

