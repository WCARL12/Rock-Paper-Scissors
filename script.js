let scoreTracker = {
  wins: 0,
  losses: 0,
  ties: 0,
};
let outcomeElement = document.querySelector(".js-display-outcome");
let displayChoicesElement = document.querySelector(".js-display-choices");
let displayScoreElement = document.querySelector(".js-display-score");
let autoPlayElement = document.querySelector(".auto-play");
let isAutoPlay = false;
let intervalAutoPlay;
displayScore();

function gameOutcome(playerChoice, computerChoice) {
  appearElement();

  if (playerChoice === computerChoice) {
    scoreTracker.ties += 1;
    outcomeElement.innerHTML = "Tie.";
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    scoreTracker.wins += 1;
    outcomeElement.innerHTML = "You win.";
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    scoreTracker.wins += 1;
    outcomeElement.innerHTML = "You win.";
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    scoreTracker.wins += 1;
    outcomeElement.innerHTML = "You win.";
  } else {
    scoreTracker.losses += 1;
    outcomeElement.innerHTML = "You lose.";
  }

  //   displayPlayerChoice.innerHTML = playerChoice;
  //   displayComputerChoice.innerHTML = computerChoice;

  displayChoices(playerChoice, computerChoice);
  displayScore();
}

function displayChoices(playerChoice, computerChoice) {
  displayChoicesElement.innerHTML = `You <img src='img/${playerChoice}-emoji.png' class='display-player-computer-choices'> <img src='img/${computerChoice}-emoji.png' class='display-player-computer-choices'> Computer`;
}

function appearElement() {
  outcomeElement.classList.add("appear");
  displayChoicesElement.classList.add("appear");
}
function getComputerChoice() {
  let random = Math.random();
  if (random < 1 / 3) {
    return "rock";
  } else if (random > 1 / 3 && random < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

function displayScore() {
  displayScoreElement.innerHTML = `Wins: ${scoreTracker.wins}, Losses: ${scoreTracker.losses}, Ties: ${scoreTracker.ties}`;
}

function resetScoreTracker() {
  scoreTracker.wins = 0;
  scoreTracker.losses = 0;
  scoreTracker.ties = 0;
  displayScore();
}

function autoPlay() {
  if (isAutoPlay) {
    isAutoPlay = false;
    autoPlayElement.textContent = `Auto Play: Off`;
    clearInterval(intervalAutoPlay);
  } else {
    isAutoPlay = true;
    autoPlayElement.textContent = `Auto Play: On`;
    intervalAutoPlay = setInterval(function () {
      gameOutcome(
        (playerChoice = getComputerChoice()),
        (computerChoice = getComputerChoice())
      );
    }, 1000);
  }
}
