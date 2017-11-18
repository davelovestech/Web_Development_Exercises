/*
This Codecademy Javascript exercise is called Message Mixer. At the start of the
exercise, you are provided with a single Javascript file that contains a variety
of text transformation functions. This Codecademy exercise requires you to keep
the functions in messageMixer.js, as a module, and move the function calls into 
message.js. In this file, commented code that starts out as "//REMNANT" was code
that was initially present in the file. It's commented out now because of the 
seperation of the functions from the function calling. 
*/

//REMNANT
//let MessageMixer = {};

/*
This function is called countCharacter. It takes an inputString and returns the
number of times that the inputCharacter is present. To simplify things, both the 
inputString and the inputCharacter are dropped to lowercase. Then a for loop is
used to cycle through the entire input string, counting the # of times that the
character is present & the count is returned. 
*/
function countCharacter(inputString, inputCharacter) {
  let count = 0;
  let string = inputString.toLowerCase();
  let character = inputCharacter.toLowerCase();
    for (let i = 0; i < string.length; i++) {
      if (string[i] === character) {
         count++;
      }
    }
  return count; 
};
/*
This function capitalizes the first character of every word. First, the input is
split at every space and sent into an array. A for loop is used to cycle through
that array & the word at that current cycle position is saved as a new variable.
Then, for the current loop position in the array, the 0 index of the word is
capitalized & concatenized to the 1th index until the end of the word. That 
array is then joined at each space and returned. 
*/
function capitalizeFirstCharacterOfWords(string) {
  let arr = string.split(" ");  
    for (let i = 0; i < arr.length; i++) {  
      let word = arr[i];
        arr[i] = word[0].toUpperCase() + word.substring(1); 
    }
  return arr.join(" "); 
};

/*
This function reverses the collective string. .split("") breaks up the input
string into individual characters, spaces included. .reverse reverses that
list and .join("") joins the list after each character, so that the reversed
string can be returned. 
*/
function reverseWord(word) {
  return word.split("").reverse().join("");
};
/*
This function leaves each word in its current place, BUT it reverses each word.
.split(" ") breaks up the input string into component words. A for loop is used
to cycle through the list of component words. Each component word at the current
loop position is passed into the reverseWord function to reverse the word. It is
then plugged into the current loop position of the string. 
*/
function reverseAllWords(sentence) {
  let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = reverseWord(words[i]);
    }
   return words.join(" ");
};

/*
This function replaces the FIRST occurrence of a word with a new word. It uses
the javascript .replace() method replaces the first input with the second input.
*/
function replaceFirstOccurence(string, toBeReplaced, replaceWith) {
  return string.replace(toBeReplaced, replaceWith);
};

/*
This function replaces EVERY instance of a word, in the supplied string, with
the submitted replacement word. .split() is used on the item to be replaced; 
that item is removed and the string is converted to an array with splitting on
the instances of the word to be replaced. The .join() method is used w/ an input
of the replacement command. This combines the array into a single string with 
the replacement word acting as the linker. Spaces aren't necessary because 
they're already present in the intial string. 
*/
function replaceAllOccurrences(string, toBeReplaced, replaceWith) {
  return string.split(toBeReplaced).join(replaceWith);
};
/*
This function encodes selected letters of the string with replacement letters.
A dictionary of old letters => new letters is used (see replacementObject). 
The string is passed in to the previously generated replaceAllOccurences
function. The replacement item is the key from the dictionary of replacement 
items and the replacement is the replacmentObject at the key index.
*/
function encode(string) {
  let replacementObject = { "a": "@", "s": "$", "i": "!", "o":"0" };
    for (let key in replacementObject) {
      string = replaceAllOccurrences(string, key, replacementObject[key]); 
    }	
    return string;
};
/*
The palindrome is simply the initial string concatenated to the initial string
passed through the reverse word function. 
*/
function palindrome(string) {
  return string + reverseWord(string);
};
/*
The pigLatin function splits the submitted string up into component words into an
array. This array is then rejoined with a concatenation of the pigLating 'ay' 
character ... well that's what it's called with. The function just replaces with
the submitted addition item AND there's an additional concatenation of a " " to
keep the original spaces in the submitted string (the initial spaces are 
replaced by the pigLating concatention.)
*/
function pigLatin(sentence, character) {
  return sentence.split(" ").join(character + " ");
};

//REMNANT
//export default MessageMixer;

/*
This exports all of the created functions, so that they may be imported into
the message.js file. 
*/
export { countCharacter, capitalizeFirstCharacterOfWords, reverseWord, reverseAllWords, replaceFirstOccurence, replaceAllOccurrences, encode, palindrome, pigLatin };





//REMNANT
//module.exports = MessageMixer;
/*
function displayMessage() {
  console.log(countCharacter("What is the color of the sky?", "t"));
  console.log(capitalizeFirstCharacterOfWords("What is the color of the sky?"));
  console.log(reverseWord("What is the color of the sky?"));
  console.log(reverseAllWords("What is the color of the sky?"));
  console.log(replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
  console.log(encode("What is the color of the sky?"));
}
displayMessage();
*/
