/*
This is a program that randomly selects 1 out of 3 events, the
event activities, and the training days required. I did *NOT*
write this program from scratch; it's part of the CodeCademy
less on Scope. Many variables were initially provided as global
and I was guided, by the CodeCademy lesson, to transfer the
global variables into block scope. I've created an excessively
long introductory comment because this assignment was tough for
me ... I initially spelled "Triathlon" as "Triathalon" (note
the extra a) in the getAllEvents function and this caused the
program to fail whenver the "Triathalon" event was chosen
because the getEventActivities() function's if statements call
for a specific spelling of "Triathlon", which caused the event
to pass as undefined. It took a long time to notice the
mispelling, so I really want to make sure that I completely
understand this assignment. You'll see, immediately under this
comment, several commented out variables. The "let allEvents;"
was commented out and transitioned into a function called
getAllEvents. Of note here is that I initially mispelt
"Triathlon" & "Decathlon" and that caused the
getEventAcitivities, which we'll get to soon, to fail. Next up,
the "let event;" was commented out. "event" is not defined as a
constant in the getRandomEvent function. To keep the program
working, "event" needs to be passed through as a parameter in
the getEventActivities and getDaysToTrain functions. I also
commented out "eventTrainingTimes." It was transferred to
within the "getDaysToTrain function. Additionally, within the
"getEventActivities()" function, I changed the variable
"activities" from a constant into a "let activities;" and now
it is redefined within each if sub-block. Also, the returns
were initially within each if sub-block; I commented those out
and left a single "return activities.join(', ');" right before
the final closing bracket within the "getEventActivities()"
function. Initially the console.log() was out in the open, so I
enclosed it in a function called "getEventMessage()" BUT the
event variable is no longer accessible to the console.log
because it's now in a function. This calls for calling the
getRandomEvent() function and storing it in a constant variable
(we picked myEvent). The myEvent constant can now be used in
the console.log AND it it necessary to pass as a variable into
the getEventActivities() AND the getDaysToTrain functions
BECAUSE it was initially available because it was global, but
now it's trapped up in a function. 
*/
//Note the next three lines are global variables that I
//commented out once I replaced them with functions.
//let allEvents;
//let event;
//const eventTrainingTimes = {'Marathon': 50, 'Triathlon': 100,
//'Decathlon': 200 };

//This is a collection of the three event types.
const getAllEvents  = () => {
  return ['Marathon', 'Triathlon', 'Decathlon'];
}

/*This function chooses 1/3 events using a random number
generator and a clever usage of the Math functions. The event
types are pulled using the getAllEvents function and then
stored in the variable allEvents. Math.random() *
allEvents.length limits a random # to correspond with 1 of the
three events and the Math.floor rounds that # down to an
integer. It's a clever idea.
*/
const getRandomEvent = () => {
  const allEvents = getAllEvents();
  //allEvents = ['Marathon', 'Triathlon', 'Decathlon'];
  const event = allEvents[Math.floor(Math.random() * allEvents.length)];
  return event;
};


/*
This function determines the event chosen and then adds
activities to that event. Note that the first if will return
null if the event selected doesn't match the event list ...
this is why my mispelling of "Triathlon" was returning null!
This function uses the .join method to poll the string's
contents with commas in between; it's useful for the Triathlon
and Decathlon events because each of those contains multiple
activities. Note that the "event" variable from getRandomEvent
is necessary as a parameter. 
*/
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
//This function uses the getAllEvents function to get the event
//types and then uses a key-value pair to return the number of
//days required to train. Note that the "event" variable from
//getRandomEvent is necessary as a parameter. 
const getDaysToTrain = event => {
  const allEvents = getAllEvents();
  //allEvents = ['Marathon', 'Triathlon', 'Decathlon'];
  if (!allEvents.includes(event)) {
    return null; 
  }
  const eventTrainingTimes = {'Marathon': 50, 'Triathlon': 100, 'Decathlon': 200 };
  return eventTrainingTimes[event];
};
/*This is the essential part of the program. The string is
partially complete and needs three variables to be filled. It
gets the event by calling the function getRandomEvent and plugs
that is as myEvent. The event activities and days to train are
obtained by calling those functions with the parameter of the
event that was randomly chosen by getRandomEvent()! 
*/
const getEventMessage = () => {
  const myEvent = getRandomEvent();
  console.log('Your event is a ' + myEvent + '. Your event activities consist of ' + getEventActivities(myEvent) + '. You have ' + getDaysToTrain(myEvent) +  ' days to train.');
}
//Here I've commented out the initial program call. Note that
//getEventMessage is what I'm calling now. 
//getRandomEvent();
getEventMessage();
