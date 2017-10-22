/*
This is a Codecademy guided exercise that covers arrays.
Through a series of transformations, a coded message is 
uncovered. You should ignore all of the times that I 
have commented out a console.log(secretMessage); call.
I was only using those to check the results of my array
transformations.
*/
let secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];
//.pop() removes the last string of an array.
secretMessage.pop();
//console.log(secretMessage);
//.push() adds the strings w/i the paranthesis to the array.
secretMessage.push('to', 'program');
//console.log(secretMessage);
//Here we add 'right' to position 7 of the array.
secretMessage[6] = 'right';
//console.log(secretMessage);
//.shift(); removes the first string of an array.
secretMessage.shift();
//console.log(secretMessage);
//.unshift() adds a string to the first position of an array.
secretMessage.unshift('Programming');
//console.log(secretMessage);
//.splice() adds new strings to an array. It requires three 
//inputs. The first input is the index to start (remember the
//-1 //of arrays). The second input is the number of indices
//(the total number of strings you wish to remove), and the
//third input are the strings you wish to add.
secretMessage.splice(5, 5, "know");
//console.log(secretMessage);
//The join command pools together all of the components
//of the array into a string that can be printed.
//The secret message turns out to be about a book
//from chris pine back in 2015 called learn to program
console.log(secretMessage.join(" "));
