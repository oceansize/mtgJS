var standings = {
                   playerOne: [],
                   playerTwo: []
                }

function battle(player1, player2) {
  var largestArmy = Math.max(player1.length, player2.length);
  var round;

  for (round = 0; round < largestArmy; round++) {
    skirmish(player1[round], player2[round]);
  };
  return standings;
}

function skirmish(player1, player2) {

  if (isSoldierPresent(player1) && isSoldierPresent(player2)) {
    var playerOneResult = clash(player1, player2);
    var playerTwoResult = clash(player2, player1);

    if (playerOneResult !== "player dies") {
      standings.playerOne.push(playerOneResult);
    }

    if (playerTwoResult !== "player dies") {
      standings.playerTwo.push(playerTwoResult);
    }
  } else if (isSoldierPresent(player1) && !isSoldierPresent(player2)) {
    standings.playerOne.push(player1);
  } else if (isSoldierPresent(player2) && !isSoldierPresent(player1)) {
    standings.playerTwo.push(player2);
  } else {
    console.log("christ knows what happened if you are seeing this");
  }
}

function power(creature) {
  return creature[0];
};

function toughness(creature) {
  return creature[1];
};

function clash(player, opponent) {
  var damage = (toughness(player) - power(opponent));
  if (damage > 0) { return player };
  return "player dies";
};

function isSoldierPresent(position) {
  if (Array.isArray(position)) {
    return true;
  }
  return false;
}
