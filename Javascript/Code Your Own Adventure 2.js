/*
This program is a simple simulation of working in an academic biology lab. Your experiments didn't work ... you
can now choose between going home, repeating the experiments, or changing your protocol. The program uses a prompt
to save the user input and then calls .toUpperCase on the input to ensure that the user input matches the expected
input. Then a switch/case is used to check for the three possible entries. Once a case is selected, another sub-prompt
gives two possible choices for each case & if/else logic determines different console.log outputs. Running this code
in Codecademy yields an error that prompt is not an acceptable method, BUT W3Schools.com says it's fine, so I'm keeping
it that way. 
*/
var user = prompt("Your experiment didn't work. Do you go HOME, REPEAT or CHANGE PROTOCOL?").toUpperCase();

switch(user)
{
    case 'HOME':
          var sleepy = prompt("You deserve some relaxation time. Are you sleepy (YES or NO)?").toUpperCase();
          var hungry = prompt("Are you hungry? (YES or NO)").toUpperCase();
          if(sleepy === "YES" || hungry === "YES")
          {
           console.log("It's a good thing you're home then!");   
          }
          else
          {
           console.log("You're not hungry OR sleepy? Go back to the lab!");   
          }
        break;
    case 'REPEAT':
        var enoughReagents = prompt("Great work ethic! Do you have enough sample to repeat(YES or NO)?").toUpperCase();
        var machineAvailable = prompt("Is the equipment that you need to use available (YES or NO)?").toUpperCase();
        if(enoughReagents === "YES" && machineAvailable === "YES")
        {
            console.log("Great! You're able to repeat the experiment.");
        }
        else
        {
            console.log("You can't repeat the experiment. You should've gone home.");
        }
        break;
    case 'CHANGE PROTOCOL':
        var freshReagents = prompt("Did you recently prepare your reagents (YES or NO)?").toUpperCase();
        var otherOptions = prompt("Are other published protocols available (YES or NO)?").toUpperCase();
        if(freshReagents === "YES" || otherOptions === "YES")
        {
           console.log("Great! It looks like you have more options to troubleshoot!"); 
        }
        else
        {
            console.log("Oh no! It looks like you've got to go back to the drawing board.");
        }
        break;
    default:
        console.log("I don't understand your response.");
        
}
