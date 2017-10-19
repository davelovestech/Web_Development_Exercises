/*
This program calculates a users sleep debt. Ideally, we'd input the user's sleep data in fromt FitBit or something like that, but I'm just a beginner. I made up hours of sleep #s for seven days of a standard week and stored them in a switch statement. The hours slept are calculated from that switch statement. And the ideal # of hours of sleep are determined based on a single night * 7. Then, there's an if/else structure that determines
if the user is getting too much, not enough, or just the right
amount of sleep. A console.log is used to display that info.
*/
//This switch statement holds all of the hours of sleep
//over the course of a week for our user.
const getSleepHours = day => {
  switch(day) {
      case 'monday':
      return 9;
      break;
      
      case 'tuesday':
      return 8;
      break;
      
      case 'wednesday':
      return 9;
      break;
      
      case 'thursday':
      return 4;
      break;
      
      case 'friday':
      return 3;
      break;
      
      case 'saturday':
      return 24;
      break;
      
      case 'sunday':
      return 5;
      break;      
            }
}
//This block sums up the hours slept in a week.
const getActualSleepHours = () => {
return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
}
//This determines the ideal weekly numbers of sleep from
//looking at the ideal hours of sleep for one night.
getIdealSleepHours = () => {
  idealHours = 8;
  return idealHours * 7;
}
//This code block pulls together the total hours of sleep 
//ideal hours of sleep for a week. It then uses an if/else
//structure to determine what to display to the user. The 
//options are too much sleep where hours over are displayed,
//too little sleep and the hours of sleep missing, and exactly //the right amount of sleep. 
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep!');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got more sleep than necessary! You are over by ' + (actualSleepHours - idealSleepHours) + ' hours of sleep!');
  } else {
    console.log('You need to get more sleep. You are behind by ' + (idealSleepHours - actualSleepHours) + ' hours.' );
  }
}
//This calls the program to begin.
calculateSleepDebt();
