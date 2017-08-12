var userChoice = prompt("Do you choose rock, paper or scissors?");
console.log(userChoice);
var computerChoice = Math.random();
console.log(computerChoice);
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function(choice1, choice2) 
{
if (choice1 === choice2) 
    {
        return"The result is a tie!";
    }
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
    //Choice 1 is scissors.
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
compare(userChoice, computerChoice);
