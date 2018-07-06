'use strict';

// http://www.codewars.com/kata/magic-the-gathering-number-1-creatures

var survivors = { playerOne: [], playerTwo: [] };

function battle(player1, player2) {
  var largestArmy = Math.max(player1.length, player2.length);
  var round;

  for (round = 0; round < largestArmy; round++) {
    skirmish(player1[round], player2[round]);
  }

  survivors.playerOne = clearOutTheDead(survivors.playerOne);
  survivors.playerTwo = clearOutTheDead(survivors.playerTwo);

  return survivors;
}

function skirmish(player1, player2) {

  if (isSoldierPresent(player1) && isSoldierPresent(player2)) {
    survivors.playerOne.push(clash(player1, player2));
    survivors.playerTwo.push(clash(player2, player1));
    return;
  }

  if (isSoldierPresent(player1) && !isSoldierPresent(player2)) {
    survivors.playerOne.push(player1);
    return;
  }

  if (isSoldierPresent(player2) && !isSoldierPresent(player1)) {
    survivors.playerTwo.push(player2);
    return;
  }

  console.log('christ knows what happened if you are seeing this');
}

function power(creature) {
  return creature[0];
};

function toughness(creature) {
  return creature[1];
};

function clash(player, opponent) {
  var damage = (toughness(player) - power(opponent));

  if (damage > 0) {
    return player;
  };
};

function isSoldierPresent(position) {
  Array.isArray(position) ? true : false;
}

function clearOutTheDead(army) {
  return army.filter(element => element !== undefined);
}
