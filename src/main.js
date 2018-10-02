import './sass/styles.scss';
//back end

//generate random array of colors
var compArray = [];
var userArray = [];

function newTurn() {
  compArray.push(randomColor());
  console.log("comp array");
  console.log(compArray);
  playColors(0);
}


function randomColor() {
  var randomNumber = Math.floor((Math.random() * 4) + 1);
  switch(randomNumber) {
    case 1:
    return "red";
    break;
    case 2:
    return "blue";
    break;
    case 3:
    return "yellow";
    break;
    case 4:
    return "green";
    break;
  }
}


function compareLength() {
  for(var i=0; i < userArray.length; i++) {
    if(compArray[i] !== userArray[i]) {
      alert("LOSER");
    }
  }
  if(userArray.length === compArray.length) {
    userArray = [];
    newTurn();
  }
};




//front end

$(document).ready(function() {
  event.preventDefault();
  newTurn();
  $("#red").click(function(){
    userArray.push("red");
    compareLength();
    colorChange("red");
  });
  $("#blue").click(function(){
    userArray.push("blue");
    compareLength();
    colorChange("blue");
  });
  $("#green").click(function(){
    userArray.push("green");
    compareLength();
    colorChange("green");
  });
  $("#yellow").click(function(){
    userArray.push("yellow");
    compareLength();
    colorChange("yellow");
  });
});

function colorChange(color) {
  setTimeout(function(){
    $("#" + color).removeClass("change-color-" + color);
  }, 2000);
  $("#" + color).addClass("change-color-" + color);
}

function playColors(arrayPosition) {
  while(arrayPosition < compArray.length){
    console.log(arrayPosition);
    colorChange(arrayPosition);
    arrayPosition ++;
  }
}



  // do {
  //   setTimeout(function() {
  //     // playColors(arrayPosition + 1);
  //     console.log(compArray[arrayPosition]);
  //     colorChange()
  //   }, 1000);
  // } while (arrayPosition === 0);
