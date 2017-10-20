/*
This is a program that randomly selects 1 out of 3 events, the event activities, and the training days required. I did *NOT* write this program from scratch; it's part of the CodeCademy less on Scope. Many variables were initially provided as global and I was guided, by the CodeCademy lesson, to transfer the global variables into block scope. You'll see, immediately under this comment, several commented out variables. The "let allEvents;" was commented out and transitioned into a function called getAllEvents. Of note here is that I initially mispelt "Triathlon" & "Decathlon" and that caused the getEventAcitivities, which we'll get to soon, to fail. Next up, the "let event;" was commented out. "event" is not defined as a constant in the getRandomEvent function. To keep the program working, "event" needs to be passed through as a parameter in the getEventActivities and getDaysToTrain functions. I also commented out "eventTrainingTimes." It was transferred to within the "getDaysToTrain function. Additionally, within the "getEventActivities()" function, I changed the variable "activities" from a constant into a "let activities;" and now it is redefined within each if sub-block. Also, the returns were initially within each if sub-block; I commented those out and left a single "return activities.join(', ');" right before the final closing bracket within the "getEventActivities()" function.

*/
//let allEvents;
//let event;
//const eventTrainingTimes = {'Marathon': 50, 'Triathlon': 100, 'Decathlon': 200 };

const getAllEvents  = () => {
  return ['Marathon', 'Triathlon', 'Decathlon'];
}

const getRandomEvent = () => {
  const allEvents = getAllEvents();
  //allEvents = ['Marathon', 'Triathlon', 'Decathlon'];
  const event = allEvents[Math.floor(Math.random() * allEvents.length)];
  return event;
};



const getEventActivities = event => {
  const allEvents = getAllEvents();
  if (!allEvents.includes(event)) {
    return null; 
  }
  let activities;
  if (event === 'Marathon') {
    activities = ['Running'];
  } 
  if (event === 'Triathlon') {
    activities = ['Running', 'Cycling', 'Swimming'];
  } 
  if (event === 'Decathlon') {
    activities = ['Running', 'Hurdles', 'Javelin throw', 'Discus Throw', 'Shot put', 'High Jump'];
  }
  return activities.join(', '); 
};

const getDaysToTrain = event => {
  const allEvents = getAllEvents();
  //allEvents = ['Marathon', 'Triathlon', 'Decathlon'];
  if (!allEvents.includes(event)) {
    return null; 
  }
  const eventTrainingTimes = {'Marathon': 50, 'Triathlon': 100, 'Decathlon': 200 };
  return eventTrainingTimes[event];
};

const getEventMessage = () => {
  const myEvent = getRandomEvent();
  console.log('Your event is a ' + myEvent + '. Your event activities consist of ' + getEventActivities(myEvent) + '. You have ' + getDaysToTrain(myEvent) +  ' days to train.');
}
//getRandomEvent();
getEventMessage();
