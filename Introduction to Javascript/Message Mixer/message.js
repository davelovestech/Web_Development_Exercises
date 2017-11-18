/*
This Codecademy Javascript exercise is called Message Mixer. At the start of the
exercise, you are provided with a single Javascript file that contains a variety
of text transformation functions. This Codecademy exercise requires you to keep
the functions in messageMixer.js, as a module, and move the function calls into 
message.js. In this file, commented code that starts out as "//REMNANT" was code
that was initially present in the file. It's commented out now because of the 
seperation of the functions from the function calling. 
*/

/*
This imports all of the functions that messageMixer.js exported.
*/
import { countCharacter, capitalizeFirstCharacterOfWords, reverseWord, reverseAllWords, replaceFirstOccurence, replaceAllOccurrences, encode, palindrome, pigLatin} from './messageMixer';
/*
The displayMessage() function uses console.log() to print out all of the messageMixer.js functions that were imported earlier. Everything is called
with the string "What is the color of the sky?". I could improve this program
by having a prompt window asking for the text to be replaced, BUT Codecademy refuses
to recognize prompt as a command; I have encountered this problem many times previously & I 
do not know how to addres it. 
*/
function displayMessage() {
  console.log("The input string is: 'What is the color of the sky?'")
  console.log("-------------------------------------------------------------")
  console.log("countCharacter for 't': ")
  console.log(countCharacter("What is the color of the sky?", "t"));
  console.log("-------------------------------------------------------------")
  console.log("capitalizeFirstCharacterOfWords: ")
  console.log(capitalizeFirstCharacterOfWords("What is the color of the sky?"));
  console.log("-------------------------------------------------------------")
  console.log("reverseWord: ")
  console.log(reverseWord("What is the color of the sky?"));
  console.log("-------------------------------------------------------------")
  console.log("reverseAllWords: ")
  console.log(reverseAllWords("What is the color of the sky?"));
  console.log("-------------------------------------------------------------")
  console.log("replaceFirstOccurence of 'sky' with 'water':")
  console.log(replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
  console.log("-------------------------------------------------------------")
  console.log("replaceAllOccurrences of 'the' with 'penguin'")
  console.log(replaceAllOccurrences("What is the color of the sky?", "the", "penguin"))
  console.log("-------------------------------------------------------------")
  console.log("Encode: ")
  console.log(encode("What is the color of the sky?"));
  console.log("-------------------------------------------------------------")
  console.log("palindrome: ")
  console.log(palindrome("What is the color of the sky?"));
  console.log("-------------------------------------------------------------")
  console.log("pigLatin with 'ay': ")
  console.log(pigLatin("What is the color of the sky?", "ay"));
}
/*
This calls the displayMessage() function that calls of of the functions that 
were imported in from messageMixer.js
*/
displayMessage();


//REMNANT
//OLD: const MessageMixer = require('./messageMixer.js');
//NEWreplacedWITH import MessageMixer from './messageMixer';
