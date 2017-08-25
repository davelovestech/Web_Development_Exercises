/*
This is a simple Code Your Own Adventure Game that uses basic Javascript. 
This is my first Javascript program, so all of these commands are new to me. 
This is my first Javascript program, so nearly everything is new to me. 
Here is an explanation of all the different types of code that I used: 
To create a single line comment in Javascript, use two forward slashes "//" 
To create a multi-line comment in Javascript, use /* to start & asterisk/ to end.
BTW, I wrote "asterisk/" instead of the actual comment closer because I don't want to close this comment :P
Confirm will open a dialog box w/ the text in between the quotes w/ default "OK" and "Cancel" options. 
console.log("will print whatever is in between the quotes"); Semicolons need to end most lines ... 
I'm still figuring this out. For example, semicolons aren't needed after 
the closing parenthesis for if/else statements and aren't needed after closing curly brackets. 
If/else statements are a great way to control the flow of various answer choices. 
Else statements don't have conditions & they come after if statements, 
which have conditions inside of the parenthesis. The parenthesis contain logical operators; 
in this exercise, I use less than "<", greater than ">" and "===". Less than and greater than are obvious, 
    but "===" initially confused me, especially in comparison to "=." 
The triple equal sign checks for equivalence in logical operators. 
The single "=" is for creating, or updating, a variable. 
Javascript prompt is slightly different than the confirm in that the prompt asks a question 
and then can record the users answer into a variable.
*/

//This confirms that the user wants to play AND gets their age.
confirm("I am ready to play!")
var age = prompt("What's your age?");

//Here, we make sure that you're 13 or older (Note that it's < 13, which leaves 13 and up as options). I could update this to include text dates, like thirteen.
if(age < 13) 
{
    console.log("You are not old enough to play.");
}
else 
{
    console.log("You are old enough to play");
}
//Here's simple story printing.
console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'");

console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'");

//Here we've got two options. Note that === is for equivalency and that = is used to create the userAnswer variable.
var userAnswer = prompt("Do you want to race Bieber on stage?");

if(userAnswer === "yes")
{
    console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!");
}
else
{
    console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'");
}
//Here's the same sort of if/else statement from earlier.
var feedback = prompt("How would you rate this game(1-10)?");

if(feedback > 8)
{
    console.log("Thank you! We should race at the next concert!");
}
else 
{
    console.log("I'll keep practicing coding and racing.");
}
    



