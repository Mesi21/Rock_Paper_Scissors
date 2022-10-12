function computerPlay() {
  let choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function oneRound(playerSelection, computerSelection) {
  let currPlayerSelection = playerSelection.toLowerCase().toUpperCase();
  if(playerSelection === computerSelection) {
    return "It\'s a tie";
  } else {
    if(playerSelection == "Rock") {
      if(computerSelection == "Scissors") {
        return "You win! Rock beats Scissors!";
      } else {
        return "You lose! Paper beats Rock!";
      }
    } else if(playerSelection == "Paper") {
      if(computerSelection == "Rock") {
        return "You win! Paper beats Rock!";
      } else {
        return "You lose! Scissors beat Paper!";
      }
    } else if(playerSelection == "Scissors") {
      if(computerSelection == "Paper") {
        return "You win! Scissors beat Paper!";
      } else {
        return "You lose! Rock beats Scissors!";
      }
    } else {
      return "That is not a valid choice. Please make a new one!"
    }
  }
}; 

