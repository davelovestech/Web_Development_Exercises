//Here I dictate that kelvin will be a constant that is the stored response of the question about what Kelvin temperature to use. 
const kelvin = prompt('What is the Kelvin temperature today?');
//celsius is kelvin - 273
const celsius = kelvin -273;
//Use let for this variable because it will be changed. The * 9/5 + 32 is a formula to convert from celsius to fahrenheit.
let fahrenheit = celsius * (9/5) + 32
//I'll use Math.floor to round down the fahrenheit value. Without this step, fahrenheit will not necessarily be an integer.
fahrenheit = Math.floor(fahrenheit);
//This step posts the temperature in fahrenheit to the console. I use the weird `` keys and the ${} to post the variable. 
console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`);
