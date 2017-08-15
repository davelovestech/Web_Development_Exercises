/*
This program is rad! This is the first program I've made that excited me! It allows the user to play Rock, Paper, Scissors against the computer.
The user picks rock, paper, or scissors and then the computer randomly generates a # that corresponds the the choice of rock, paper, or scissors.
The computer's choice is then compared to the users choice and a series of if/else paths determine who won.
*/

//The user is asked for their weapon choice here. Also, their choice is printed.
var userChoice = prompt("Do you choose rock, paper or scissors?");
console.log(userChoice);
//Math.random is used to create a number from 0-0.99. The following if/else if/else translates the random number to the computer's choice, which is then printed.
var computerChoice = Math.random();
console.log(computerChoice);
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

//Here's where we define the compare function which determines the winner, based on the logical tests within. Note that the variables don't match the call (see the bottom). Order matters, not name.
var compare = function(choice1, choice2) 
{
//If the user and computer made the same choice, it's a tie.    
if (choice1 === choice2) 
    {
        return"The result is a tie!";
    }
    //The program works, BUT I really should have kept the detailed names here ... I have to look up choice1 and choice2 instead of immediately knowing the variable's true meaning. 
    //Note that choice1 is user's choice and choice2 is the computer's choice.
    //This block is for the user choice of rock, so computer's choice of scissors would beat the user and the computer's choice of paper would lose to the user.
    else if (choice1 === "rock") 
    {
        if (choice2 === "scissors")
        {
            return "rock wins";
        }
        else 
        {
            return "paper wins";
        }
    }
    //This block is for a user choice of paper. Computer's choice of rock will lose, but computer's choice of scissors will win.
    else if (choice1 === "paper")
    {
        if (choice2 === "rock")
        {
            return "paper wins";   
        }
        else
        {
            return "scissors wins";   
        }
    }
    //Note that I didn't need to have a condition for stating that the choice1 is scissors because it's the only remaining option.
    //The logic path works the same as above for computer's choice of rock. Also note that I don't need a conditional for scissors wins because the only other option for the computer is paper.
    else
    {
        if (choice2 === "rock")
        {
            return "rock wins"   
        }
        else
        {
            return "scissors wins"   
        }
    }
}
//This is where we call the compare method. Note that the variable names don't match the ones for the internal calling of the program. The order, NOT the name appears to be what matters.
compare(userChoice, computerChoice);
