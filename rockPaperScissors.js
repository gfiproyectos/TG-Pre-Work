const getUserChoice  = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'  ) {
    return userInput;
  } else {
    console.log('Error!!!');
  }
};

const getComputerChoice  = () => {
  
  let compChoice = Math.floor(Math.random() * 3);
  
  if (compChoice === 0) {
    return 'rock';
  } else if (compChoice === 1) {
    return 'paper';
  } else {
    return 'scissors';
  };
  
};

const determineWinner = (userChoice,computerChoice)  => {
 
  if (userChoice === 'bomb' ) {
    return 'User Won!!!';
  }
  
  if (userChoice === computerChoice ) {
    return 'Game is a Tie!!!';
  }
  
  if (userChoice === 'rock') {
    if (computerChoice === 'paper' ) {
      return 'Computer Won!!!';
    } else {
      return 'User Won!!!';
    }   
  };
  
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors' ) {
      return 'Computer Won!!!';
    } else {
      return 'User Won!!!';
    }   
  };
  
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock' ) {
      return 'Computer Won!!!';
    } else {
      return 'User Won!!!';
    }   
  };
  
};

const playGame  = () => {
  
  let userChoice = getUserChoice('bomb')
  let computerChoice = getComputerChoice();
  
  console.log(userChoice);
  console.log(computerChoice);
  
  console.log(determineWinner(userChoice,computerChoice));
  
};

playGame();