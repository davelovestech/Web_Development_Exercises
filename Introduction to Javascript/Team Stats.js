/*
This program is part of the Codecademy Introduction to
Javascript track. It's from chapter 8: Objects. The program
uses data structures to create sports teams, players & games. 
*/

//The team object encapsulates all of the program except for
//the function calls at the end. There are no constructors.
//lists of objects for players & games are created first. 
const team = {
  _players: [
    {firstName: "Amy",
    lastName: "Poehler",
    age: 43},
    {firstName: "Justin",
    lastName: "Roiland",
    age: 33},
    {firstName: "Dan",
    lastName: "Harmon",
    age: 48},
  ],
  _games: [
    {opponent: "San Jose Snarks",
    teamPoints: 33,
    opponentPoints: 44},
    {opponent: "Trogdor",
    teamPoints: 44,
    opponentPoints: 45},
    {opponent: "Britney Spears",
    teamPoints: 11,
    opponentPoints: 88},
  ],
  //There are functions for getting games & players. 
  get games() {
    return this._games;
  },
  get players() {
    return this._players;
  },
  //There are also functions to add players and to add games. 
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this.players.push(player);
  },
  addGame(opponent, teamPoints, opponentPoints) {
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };
    this.games.push(game);
  }
};
//Here, more players are being added. 
team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);
//This prints out all of the players.
console.log('The players are: ')
console.log(team.players);
//Here, new games are added.
team.addGame("The Devil", 13, 9);
team.addGame("Baddies", 2, 5);
team.addGame("Leslie Knope", 5, 2);
//This prints out all of the games
console.log('\nHere are all of the games: ')
console.log(team.games);










