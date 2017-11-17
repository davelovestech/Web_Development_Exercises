/*
Here's an explanation of what I've learned while creating this Rock, Paper, Scissor program. See the in-program comments for more 
specific information about the different logical paths that are taken. var is Javascripts way of indicating that you're making a 
new variable. It's followed by the variable name and then a single equals sign that is for the variable's value. In this program's 
case, the first variable is entered by the user with the same "prompt" command that we saw in Javascript section 1. Console.log, 
as we saw in the last section, prints out a statement in quotes OR a variable name w/o quotes. Math.random() is a neat command! 
It randomly creates a number from 0, up to 1 ... 1 isn't an option, so it's actually 0 - 0.99. The random number is later used 
to select the computer's choice. This program is my first usage of "else if". Else if comes between if and else and I think you 
can have as many "else if"s in between as you'd like ... some brief reading on Stack Overflow suggests this is the case. I use if, 
else if, else to make <0.34 = "rock", <= 0.67 = "paper" and the final else doesn't need any condition because all that's left is 
>0.67. Now that we've got the user's and the robot's choice, we need to determine who won and we can do that with more if/else 
statements and a new Javascript feature called function. The Javascript function that I've labeled as compare takes the computer 
and user's choices and runs through the logic of figuring out who won. This was my favorite part of the program because it 
required a whiteboard to make sure all choice options were covered and showed me how I didn't have to take everything into account 
once I've already covered an option from before, like when I didn't have to use a conditional for >0.67 for the computer's selection. 
I'll go into more detail about the choice paths inside the program w/ my comments there becase it'll get too confusing to do that 
here w/o the code right next to it. I will mention the return command, which takes the result of the inner code block and serves 
it up to the function's call. Also, note that the compare function gets called by the end of the program, where it says 
"compare(userChoice, computerChoice)
*/

/*
This program is rad! This is the first program I've made that excited me! It allows the user to play Rock, Paper, Scissors against 
the computer. The user picks rock, paper, or scissors and then the computer randomly generates a # that corresponds the the choice 
of rock, paper, or scissors. The computer's choice is then compared to the users choice and a series of if/else paths determine who won.
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
