/*This is a simulator of the popular game rock, paper scissors.
The user must input their choice into the program itself. I tried to use the user prompt method, 
but the CodeCademy learning platform kept flagging "prompt" as undefined ... 
maybe I've done something wrong. Nontheless, the computer choice is randomly determined and 
then the user is notified of the computer choice and who won.
*/
//This code block uses an if/else structure to ensure that 
//the user entry is a viable command. Also, it converts the //userInput to lower case to account for user input 
//capitalization differences.
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock') {
    return userInput;
  } else if (userInput === 'paper') {
    return userInput;
  } else if (userInput === 'scissors') {
    return userInput;
  } else if (userInput === 'bomb') {
    return userInput;
  } else {
    console.log('BEEP! Your entry does not compute.');
  }
}
//This code block uses a random number generator and a 
//switch statement o determine the computer's choice.
const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch(randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2: 
      return 'scissors';
      break;
	}
}
//This code block uses an if/else structure to determine
//the winner. All possible choices are considered and the
//winner is returned in a text string.
const determineWinner = (UserChoice, ComputerChoice) => {
  if (UserChoice === 'bomb') {
    return 'The human won, BUT they are a LAME cheater.'
  }
  if (UserChoice === ComputerChoice) {
    return 'The game was a tie.';
  }
  if (UserChoice === 'rock') {
    if (ComputerChoice === 'scissors') {
      return 'The human won. The human picked rock and the computer picked scissors.';
    } else {
      return 'The computer won. The human picked rock and the computer picked paper.';
    }
  }
  if (UserChoice === 'paper') {
    if (ComputerChoice === 'scissors') {
      return 'The computer won. The human picked paper and the computer picked scissors.';
    } else {
      return 'The human won. The human picked paper and the computer picked rock.';
    }
  }
  if (UserChoice === 'scissors') {
    if (ComputerChoice === 'rock') {
      return 'The computer won. The human picked scissors and the computer picked rock.';
    } else {
      return 'The human won. The human picked scissors and the computer picked paper.';
    }
  }
}
//This code block orchestrates the whole program. I'd like to
// be able to use a prompt to get the user's preferred choice.
//But, all I can get to work is the recommended program-only 
//user choice. getUserChoice is called w/ the users choice 
//and it checks for a legal selection. getComputerChoice 
//is run to determine computer choice. A console.log is 
//used to run, and then print, the results of the game.  
const playGame = () => {
  const userChoice = getUserChoice('paper');
  console.log('The user choice is: ' + userChoice)
  let computerChoice = getComputerChoice();
  console.log('The computer choice is: ' + computerChoice)
  console.log(determineWinner(userChoice, computerChoice));
}
//This calls the program into existence.
playGame();
