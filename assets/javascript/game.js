
$(document).ready(function(){


  //assigns variables a randomly selected number from 1-12
var green = Math.floor((Math.random()* 12) + 1);
var purple = Math.floor((Math.random()* 12) + 1);
var orange = Math.floor((Math.random()* 12) + 1);
var yellow = Math.floor((Math.random()* 12) + 1);

//variable to hold current users number, wins, and  loses
var currentNumber = 0;
var wins = 0;
var loses = 0;

//assigns variable a random target number for user to guess
var targetNumber = Math.floor((Math.random() * 102) + 19);


//inserts random number in HTML
$(".numberToGuess").text(targetNumber);
console.log(targetNumber);

function reset(){
  targetNumber = Math.floor((Math.random() * 102) + 19);
  $(".numberToGuess").text(targetNumber);

  green = Math.floor((Math.random()* 12) + 1);
  purple = Math.floor((Math.random()* 12) + 1);
  orange = Math.floor((Math.random()* 12) + 1);
  yellow = Math.floor((Math.random()* 12) + 1);

}


//click function for green crystal
$(".crystalGreen").on("click", function(event){
  $(this).attr("data-crystalvalue", green);
  currentNumber += green;
  alert("Your current number is: " + currentNumber)
  console.log(currentNumber);
  checkWinner()

});

//click function for yellow crystal
$(".crystalYellow").on("click", function(event){
  $(this).attr("data-crystalvalue", yellow);
  currentNumber += yellow;
  alert("Your current number is: " + currentNumber)
  console.log(currentNumber);
  checkWinner()

});

//click function for purple crystal
$(".crystalPurple").on("click", function(event){
  $(this).attr("data-crystalvalue", purple);
  currentNumber += purple;
  alert("Your current number is: " + currentNumber)
  console.log(currentNumber);
  checkWinner()

});

//click function for orange crystal
$(".crystalOrange").on("click", function(event){
  $(this).attr("data-crystalvalue", orange);
  currentNumber += orange;
  alert("Your current number is: " + currentNumber)
  console.log(currentNumber);
  checkWinner()

});

//function to check winning
function checkWinner() {
  if (currentNumber === targetNumber){
    alert("You win!");
    wins++
    $(".wins").text(wins);
    console.log("wins: " + wins)
    currentNumber = 0;
    reset();
  }
  else if (currentNumber >= targetNumber){
    alert("You lose!!");
    loses++
    $(".loses").text(loses);
    console.log("loses: " + loses)
     currentNumber = 0;
     reset();
  }

  $(targetNumber).trigger("reset");

}
});
