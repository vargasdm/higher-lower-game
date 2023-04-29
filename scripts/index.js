let valid_input = false;
let maxNumberInput, maxNumber;
let instructions = document.getElementById("instructions");
let message = document.getElementById("message");
let validationMessage = document.getElementById("validationMessage");
let userGuesses = [];

// validates that the input is a number more than 0
while (!valid_input) {
  maxNumberInput = window.prompt("What Should The Maximum Number Be?");

  // makes user input a number and rounds it if the answer is a deciaml
  maxNumber = Math.round(Number(maxNumberInput));
  console.log(maxNumber);

  if (maxNumber != NaN && maxNumber > 0) {
    valid_input = true;
  }
}

// renders the instructions
instructions.innerHTML = `Please Enter an Number Between 1-${maxNumber}`;

// picks a number between 1 and the max number the user chose
let number = Math.floor(Math.random() * maxNumberInput) + 1;
console.log(number);

// adds guess to userGuesses array
function addGuess(userGuesses, guess) {
    console.log("this functiojn is running");
  userGuesses.push(guess);
}

function checkGuesses(userGuesses, guess) {
    console.log(guess);
    console.log(userGuesses);
  for (let i = 0; i < userGuesses.length; i++) {
    if (userGuesses[i] === guess) {
      console.log("this loop is running");
      validationMessage.innerHTML = "That Number has Already Been Guessed.";
    } else {
        return  addGuess(userGuesses, guess);
    }
  }
}

// validates if guess is a number, in range, and whether it is over or under the target number
function validateGuess() {
  let guess = document.getElementById("guess").value;
  console.log(guess);
  console.log(userGuesses);

  if (isNaN(guess)) {
    message.innerHTML = "That is Not a Number!";
  } else if (guess < 1 || guess > maxNumber) {
    message.innerHTML = "That Number is Not in Range, Try Again.";
  } else if (guess > number) {
    checkGuesses(userGuesses, guess);
    message.innerHTML = "No, Try a Smaller Number";
  } else if (guess < number) {
    checkGuesses(userGuesses, guess);
    message.innerHTML = "No, Try a Larger Number";
  } else {
    checkGuesses(userGuesses, guess);
    message.innerHTML = `You Got It! It took you ${userGuesses.length} tries and your guesses were ${userGuesses.toString()}.`;
  }
}
