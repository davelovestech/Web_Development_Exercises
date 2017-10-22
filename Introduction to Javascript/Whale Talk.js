/*
This assignment is part of the Codecademy Full Stack Web
Developer Program. It can be found in the Introduction to
Javascript Course, within the Loops lecture. This program,
called "Whale Talk" translates any sentence into "Whale Talk."
Whale Talk has no consonants, only vowels AND the Us and Es are
extra long (doubled). 
*/

//This is the input for the program. I could make it more user-
//friendly with a prompt, but I'm having trouble doing that
//here. I think it should be: var input = prompt('What would you
//like to translate into Whale Talk?', 'Harry Potter'); BUT that
//results in a ReferenceError for prompt. So, I'll still with
//the stored sentence for translation.
let input = 'Amy Pond, theres something you better understand about me cause its important and one day your life may depend on it: I am definitely a mad man with a box.'
//The following is an array of just vowels (Whale Talk has
//vowels). 
let vowels = ['a', 'e', 'i', 'o', 'u'];
//resultArray will be where we store found vowels.
let resultArray = [];
//
for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
  for(let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++) {
    if(input[inputIndex] === vowels[vowelIndex]) {
      resultArray.push(input[inputIndex]);
    } 
  }
  if(input[inputIndex] === 'e' || input[inputIndex] === 'u') {
    	resultArray.push(input[inputIndex]);   
  }
}  
resultArray = resultArray.join('').toUpperCase();
console.log(resultArray);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
