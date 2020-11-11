var names = [];
var northList = [];
var southList = [];
var eastList = [];
var westList = [];

//A function to move all remaining participants to the four corners (randomly)
function fourCorners() {
  var numberOfPlayers = names.length;
  var north = document.getElementById("North");
  var south = document.getElementById("South");
  var east = document.getElementById("East");
  var west = document.getElementById("West");
  
  //empty the four corners
  north.innerHTML = "";
  south.innerHTML = "";
  east.innerHTML = "";
  west.innerHTML = "";
  northList = [];
  southList = [];
  eastList = [];
  westList = [];
  
  //Move players to the four corners
  for (i = 0; i < numberOfPlayers; i++) {
    var room = Math.floor(Math.random()*4);
    switch(room) {
    case 0:
      north.innerHTML = north.innerHTML + names[i] + "<br/>";
      northList.push(names[i]);
      break;
    case 1:
      west.innerHTML = west.innerHTML + names[i] + "<br/>";
      westList.push(names[i]);
      break;
    case 2:
      east.innerHTML = east.innerHTML + names[i] + "<br/>";
      eastList.push(names[i]);
      break;
    case 3:
      south.innerHTML = south.innerHTML + names[i] + "<br/>";
      southList.push(names[i]);
      break;
    }
  }
}

//Start again
function resetGame() {
  names = ["Kacy", "Lucas", "Ali", "Cheung", "Leila", "Jeff", "Fran", "Noah", "Eldece", "Marwan", "Laura", "Harry", "Tim", "Jess", "Keziah", "Sivanujan", "Millie", "Tasmiya", "Reuben", "Ruby", "Finley", "Oliver"];
  fourCorners();
}

//This function is triggered when the central player chooses one of the four corners (by clicking on one of the four butttons) -- complete the code below;
function clickCorner(corner) {
  var remaingOfPlayer = names.length;
  if (remaingOfPlayer < 2) {
    alert ('GAME FINISHED \nCLICK "Start New Game"');
  } else {
    switch(corner) {
    case "North":
      names = southList.concat(eastList,westList);
      break;
    case "South":
      names = northList.concat(eastList,westList);
      break;
    case "East":
      names = westList.concat(northList,southList);
      break;
    case "West":
      names = eastList.concat(northList,southList);
      break;
    }
    fourCorners();
  } 
}
