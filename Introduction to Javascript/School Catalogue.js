/*
This program is called School Catalogue. It is part of the 
Chapter 9 Classes exercise list for the Codecademy Introduction 
to Javascript track. The requirement is to create a program
with classes that can catalogue primary, middle & high school
information. 
*/

//School is the main class of this program. It's constructor
//allows for name, level & numberOfStudents. 
class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  //This ensures that the new number of students is a number
  //with the typeof operator. It prints an error, if the
  //type of entry is incorrect. 
  set numberOfStudents(newNumberOfStudents) {
    if (typeof newNumberOfStudents === 'number') {
      this._numberOfStudents = newNumberOfStudents;
    } else {
      console.log('Invalid input: numberOfStudents must be set to a Number')
    }
  }
  //The quickFacts function uses string interpolation to print
  //general information about the school by calling instances
  //of name, number of students and level. 
  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} students, typically between the ages of ${this._level}.`);
  }
  //static means that it can't be called on instances of the
  //class. See the end of the program for the submitted data
  //into this parameter. It uses Math.floor and Math.random to
  //select a sbstitute teacher from a submitted list. 
  static pickSubstituteTeacher(substituteTeachers) {
    const randomNumber = Math.floor(Math.random()*substituteTeachers.length-1);
    return substituteTeachers[randomNumber];
  }
}
//The PrimarySchool class extends the main School class and
//has a pickupPolicy in addition to the extended parameters.
//super is used to grab the established properties from the
//parental class. 
class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }
  //When I first completed this exercise, I did not have this
  //code here. I added it, so I can call the pickupPolicy to
  //be printed at the end of the program. I was initially
  //printing the correct pickupPolicy, BUT then there was an
  //extra undefined that was coming up. It turns out I was 
  //using console.log in this function AND also in the call of
  //this function at the end of the program. Now it just has
  //The console.log here and a call for this function at the
  //end of the program. 
  pickupPolicy() {
    console.log(this._pickupPolicy);
  }
}
//The HighSchool is also an extension of the main School class.
//It has sportsTeams in addition to the previously established
//functions. 
class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  sportsTeams() {
    console.log(this._sportsTeams);
  }
}
//Here is a new instance of the PrimarySchool class. Recall
//the string interpolation from earlier as here it is being
//sent a string & a number to be interpolated. 
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
console.log("Here, quickFacts() is called on the lorraineHansbury instance: ")
lorraineHansbury.quickFacts();

//The pickSubstituteTeacher is being called on a list of 
//potential teachers. 
console.log("\nHere the pickSubstituteTeacher static method is being called with an input string of 6 potential substitute teachers: ")
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

//Here a new HighSchool is added & then it's sportsTeams object
//is called to be printed. 
const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log("\nHere the Al E. Smith school's sports teams are being printed: ")
alSmith.sportsTeams();

console.log("\nHere, there's a call to the pickupPolicy for the Lorraine Hansbury school: ")
lorraineHansbury.pickupPolicy();







