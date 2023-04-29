let valid_input = false;
let maxNumberInput, maxNumber;
let instructions = document.getElementById("instructions");
let message = document.getElementById("message");
let userGuesses = [];

// validates prompt user input
while (!valid_input) {
  maxNumberInput = window.prompt("What Should The Maximum Number Be?"); 

  if (maxNumberInput != NaN && maxNumberInput > 0) {
    maxNumber = Math.round(Number(maxNumberInput));
    valid_input = true;
  }
}

instructions.innerHTML = `Please Enter an Number Between 1-${maxNumber}`;

let number = Math.floor(Math.random() * maxNumberInput) + 1;

function startGame() {
  let guess = document.getElementById("guess").value;
  if (validateGuess(guess)) {
    game(guess);
  }
}

function validateGuess(guess) {
  let valid = true;
  if (isNaN(guess)) {
    message.innerHTML = "That is Not a Number!";
    valid = false;
  } else if (guess < 1 || guess > maxNumber) {
    message.innerHTML = "That Number is Not in Range, Try Again.";
    valid = false;
  } else if (isDuplcateGuess(guess)) {
    message.innerHTML = "That Number has Already Been Guessed.";
    valid = false;
  }
  return valid;
}

function game(guess) {
  userGuesses.push(guess);
  if (guess > number) {
    message.innerHTML = "No, Try a Smaller Number";
  } else if (guess < number) {
    message.innerHTML = "No, Try a Larger Number";
  } else {
    message.innerHTML = `You Got It! It took you ${
      userGuesses.length
    } different tries and your guesses were ${userGuesses.join(", ")}.`;
  }
}

function isDuplcateGuess(guess) {
  let found = userGuesses.find((e) => e === guess);
  return !(found == null || found == undefined);
}
