/*This program will return eightball responses based on
a random number generator -> eightball decision tree. 
I could build in a prompt to allow for any question.
*/
//This is the user name. I could've made a prompt for this.
let userName = 'David';
//This is a ternary operator that will say Hello, username
//unless the username is empty.
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');
//I could build a prompt in for the eightball question.
let userQuestion = 'Will I become a werewolf tonight?';
//This creates a random number between 0-7.
let randomNumber = Math.floor(Math.random()*8);
//Here we introduce the eightball variable AND use a 
//switch statement to plug in the value based on a random #.
let eightBall = '';
switch (randomNumber) {
    case(0):
    eightball = 'It is certain';
    break;
    case(1):
    eightball = 'It is decidedly so';
    break;
    case(2):
    eightball = 'Reply hazy try again';
    break;
    case(3):
    eightball = 'Cannot predict now';
    break;
		case(4):
    eightball = "Don't count on it";
    break;
    case(5):
    eightball = 'My sources say no';
    break;
    case(6):
    eightball = 'Outlook not so good';
    break;
    case(7):
    eightball = 'Signs point to yes';
    break;
}
//Here I use the `` ${} method of returning a string.
console.log(`You asked: ${userQuestion}. The eightball answered: ${eightball}`);
