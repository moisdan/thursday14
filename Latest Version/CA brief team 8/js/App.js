let score = JSON.parse(localStorage.getItem("score")) || {
    won: 0,
    lost: 0,
    tie: 0,
};

updateScoreElement();

document.querySelector(".js-scissor-button").addEventListener("click", () => {
    playGame("scissor");
});

document.querySelector(".js-rock-button").addEventListener("click", () => {
    playGame("rock");
});

document.querySelector(".js-paper-button").addEventListener("click", () => {
    playGame("paper");
});

function playComputer() {
    const randomNumber = Math.random();
    let computerMove = "";
    if (randomNumber < 1 / 3) {
        computerMove = "scissor";
    } else if (randomNumber < 2 / 3) {
        computerMove = "rock";
    } else {
        computerMove = "paper";
    }
    return computerMove;
}

function playGame(playUser) {
    let result = "";
    let computer = playComputer();
    if (playUser === "scissor") {
        if (computer === "scissor") {
            result = "It's a tie!";
        } else if (computer === "rock") {
            result = "You lost!";
        } else if (computer === "paper") {
            result = "You won!";
        }
    } else if (playUser === "rock") {
        if (computer === "scissor") {
            result = "You won!";
        } else if (computer === "rock") {
            result = "It's a tie!";
        } else if (computer === "paper") {
            result = "You lost!";
        }
    } else if (playUser === "paper") {
        if (computer === "scissor") {
            result = "You lost!";
        } else if (computer === "rock") {
            result = "You won!";
        } else if (computer === "paper") {
            result = "It's a tie!";
        }
    }
    if (result === "You won!") {
        score.won += 1;
    } else if (result === "You lost!") {
        score.lost += 1;
    } else if (result === "It's a tie!") {
        score.tie += 1;
    }
    updateScoreElement();
    document.querySelector(".result").innerHTML = result;
    document.querySelector(".js-moves").innerHTML = `You
        <img src="../images/${playUser}-pic.png" class="move-icon">
        <img src="../images/${computer}-pic.png" class="move-icon"> Computer`;
}

function updateScoreElement() {
    document.querySelector(".js-score").innerHTML = `won: ${score.won}, lost: ${score.lost}, tie: ${score.tie}`;
}


/*Page2*/


