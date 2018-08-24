const team = {
    _players: [
      {firstName: 'Eddie', 
           lastName: 'Acosta', 
           age: 44},
      {firstName: 'Jorge', 
           lastName: 'Rojas', 
           age: 38},
      {firstName: 'Luis', 
           lastName: 'Vides', 
           age: 36}
    ],
    _games: [{opponent: 'Broncos', teamPoints: 42, opponentPoints: 27},
            {opponent: 'Bravos', teamPoints: 12, opponentPoints: 5},
            {opponent: 'Bears', teamPoints: 3, opponentPoints: 8}],
    
    get players () {
    
    },
    get games () {
    
    },
  
    addPlayer  (playerFirstName, playerLastName, playerAge)  {
                
          let player = {
            firstName: playerFirstName,
            lastName: playerLastName,
            age: playerAge
          }
          
          this._players.push(player);
          
        },  
  
    addGame  (gameOpponent, gameTeamPoints, gameOpponentPoints)  {
                
          let game = {
            opponent: gameOpponent,
            teamPoints: gameTeamPoints,
            opponentPoints: gameOpponentPoints
          }
          
          this._games.push(game);
          
        }  
    
  };
  
  
  
  team.addPlayer("Steph", "Curry", 28);
  team.addGame("Rays", 5, 6);
  team.addGame("Nets", 88, 55);
  team.addGame("Rams", 44, 21);
  
  console.log(team._players);
  console.log(team._games);  