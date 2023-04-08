// Need to create function to start game when game is pressed
var startButton = document.querySelector("#start");
var startHover = document.querySelector("#start");

startHover.addEventListener("hover", function() {
    var changeButton = document.getElementById(startButton);
    console.log("ding");
    changeButton.style.backgroundColor = "purple";
});

startButton.addEventListener("click", function() {
startGame();
});


function startGame() {
return;
};

// Need to create function to replace screen content as game is played

