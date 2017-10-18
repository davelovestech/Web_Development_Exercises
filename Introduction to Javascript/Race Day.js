/*This program takes an input of age & early registration and then determines their run time and race number for planning a race. 
*/
//raceNumber is randomly determined.
let raceNumber = Math.floor(Math.random()*1000);
//earlyRegistration is determined by the programmer. 
//This case has it equal to false.
let earlyRegistration = false;
//runnersAge is determined by the programmer.
//This case has is = to 16.
let runnersAge = 16;
//This is an if / block that logically details the possible answers.
//If they didn't register early, they get +1000 priority.
if (!earlyRegistration) {
  raceNumber += 1000;
}
//If they're >= 18 AND they registered early, thier race time
//is at 930 am and their race number is displayed.
if (runnersAge >= 18 && earlyRegistration) {
  console.log(`You will race at 9:30am. Your race number is ${raceNumber}`)
//If they registered early OR they're >= 18, they'll race
//at 11am and their number will be displayed. 
} else if (earlyRegistration || runnersAge >= 18) {
  console.log('You will race at 11:00 am. Your race number is: ' + raceNumber);
//If they're younger than 18 AND they didn't register early
//they get the latest run time of 1230pm and race # displayed.
} else if (runnersAge < 18 && !earlyRegistration) {
  console.log(`You will race at 12:30 pm. Your race number is ${raceNumber}.`)
//If their info doesn't match the registered routes, then
//they need to talk with management. 
} else {
  console.log('Please see the registration desk.');
}
