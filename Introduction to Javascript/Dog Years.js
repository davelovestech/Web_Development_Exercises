//This program will convert my age into dog years. First, i'll start by defining my age with a variable.
const myAge = 29;
//The first 2 years of a human life count as 10.5 dog years each. Also, each human year counts as 4 dog years. The variable earlyYears covers the first 2 years of a human life; multiplying that by 10.5 will yield the total earlyYears of human converted to dog years. 
let earlyYears = 2;
earlyYears *= 10.5;
//We just covered the first two years of life, so remove 2 from myAge to yield the remaining human years that need to be converted to dog years. 
let laterYears = myAge -2;
//Multiplying the remaining years by 4 will convert to dog years. 
laterYears *=4;
//Now we'll add the earlyYears (*10.5) and the laterYears *4 together.
let myAgeInDogYears = earlyYears + laterYears;
//myName is David. We'll use this for string concatenation. I wan to convert myName into lower case because it needs to be lower case to gramatically fit the next step.
let myName = 'David';
myName = myName.toLowerCase();
//This is a string method that pulls everything from before into a coherent string. Note that I am using the `` and the ${} methods of pooling variables and strings together. 
console.log(`My name is ${myName}. I am ${myAgeInDogYears} old in dog years.`);
