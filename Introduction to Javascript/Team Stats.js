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
  get games() {
    return this._games;
  },
  get players() {
    return this._players;
  },
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
team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);

console.log(team.players);

team.addGame("The Devil", 13, 9);
team.addGame("Baddies", 2, 5);
team.addGame("Leslie Knope", 5, 2);

console.log(team.games);










