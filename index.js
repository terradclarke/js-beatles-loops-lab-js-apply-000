// add solution here
function theBeatlesPlay(players, instruments) {
  var allPlayers = [];
  for (var i=0; i < players.length; i++) {
    allPlayers.push(players[i] 
    + " plays " 
    + instruments[i]);
  }
  return allPlayers
}

function johnLennonFacts(newFacts) {
  var facts = ["He was the last beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var newFacts = ["While on tour, he enjoyed playing Monopoly", "Harmonica was the first instrument Lennon learned to play"];
  var i = 0;
  while (newFacts.length < facts.length) {
    newFacts.push(facts[i] + "!!!");
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles (num) {
  var love = [];
  do {
    love.push("I love the Beatles!");
    num++;
  } while (num < 15);
  
  return love;
}