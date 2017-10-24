/*
This activity is called Mini Linter. It is part of the Codecademy Web Developer Program > Introduction to Javascript > 7 Iterators > Mini Linter. The goal is to use iterators to improve a provided story AND to log important story details for the user. 
*/
//Here's the story:
let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';
//Here is an array of the overused words:
let overusedWords = ['really', 'very', 'basically'];
//Here is an array of the unnecessary words:
let unnecessaryWords = ['extremely', 'literally', 'actually' ];
//This splits up the story string into an array of substrings.
let storyWords = story.split(' ');
//Here we use the .length method to report the story length.
console.log('The word count of this story is: ' + storyWords.length + '.');
//Here I remove all of the unnecessary words.
//The story words substring is filtered, checking
//for the absence of the unnecessary words.
let betterWords = storyWords.filter(storyWordItem => !unnecessaryWords.includes(storyWordItem));
//Here I count the number of overused words in the better
//Words array of substrings. The numberOverusedWords is 
//initially set to 0. The .forEach iterator is used to 
//run through the betterWords substring array AND then 
//also to run through the overusedWords substring array.
//I use an if to check for equivalence of the wordItem and
//the overusedWord and then ++ the numberOverusedWords for
//hits.
let numberOverusedWords = 0;
betterWords.forEach(function(wordItem) {
  overusedWords.forEach(function(overusedWord) {
    if(wordItem === overusedWord) {
      numberOverusedWords++;
    }
  })
})
//This is a console.log of the # of overused words.
console.log('The number of overused words in this story is: ' + numberOverusedWords + '.');                   
//This checks for the number of sentences (initially 0).
//forEach is used to run through the betterWords substring
//array. I use if / else if to check for ! OR . and count
//each of those sentence enders as a new sentence.
let numberSentences = 0;
betterWords.forEach(function(storyItem) {
  if(storyItem.includes('!')) {
    numberSentences++;
  } else if (storyItem.includes('.')) {
    numberSentences++;
  }
})
//Here's a console.log to state the number of sentences.
console.log('There are ' + numberSentences + ' sentences in the story.')
//This console.log is used to print the betterWords 
//substring array. Each substring array is joined with
//a space in between to get the story back into a regular 
//string.
console.log(betterWords.join(' '));









                   
