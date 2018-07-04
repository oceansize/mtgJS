console.log('gotcha');
// http://www.codewars.com/kata/magic-the-gathering-number-1-creatures

var standings = {
                   playerOne: [],
                   playerTwo: []
                }

function power(creature) {
  return creature[0];
};

function toughness(creature) {
  return creature[1];
};

function clash(challenger, adversary) {
  var damage = (toughness(adversary) - power(challenger));
  if (damage > 0) { return adversary };
  return "adversary dies";
};

function skirmish(player1, player2) {
  var playerOneResult;
  var playerTwoResult;

  if (isSoldierPresent(player1) && isSoldierPresent(player2)) {
    playerOneResult = clash(player1, player2);
    playerTwoResult = clash(player2, player1);
  }

  if (isSoldierPresent(player1) && !isSoldierPresent(player2)) {
    standings.playerOne.push(player1);
  }

  if (isSoldierPresent(player2) && !isSoldierPresent(player1)) {
    standings.playerTwo.push(player2);
  }

  if (playerOneResult !== "adversary dies") {
    standings.playerOne.push(playerOneResult);
  }

  if (playerTwoResult !== "adversary dies") {
    standings.playerTwo.push(playerTwoResult);
  }
}

function isSoldierPresent(position) {
  if (Array.isArray(position)) {
    return true;
  }
  return false;
}

function battle(player1, player) {
  var largestArmy = Math.max(player1.length, player2.length);
  var round;

  for (round = 0; round < largestArmy; round++) {
    skirmish(player1[round], player2[round]);
  };
  return standings;
}
