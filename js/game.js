$(document).ready(function(){


  var hands = ["rock", "paper", "scissors"];
  var playerWins = 0;
  var computerWins = 0;
  var gameCount = 0;

  $("[data-throw=rock]").on("click", function(){
    var compSelect = hands[Math.floor(Math.random()*3)];
    if (compSelect === "rock"){
      alert("tie game");
    } else if (compSelect === "paper"){
      alert("you lose");
    } else if (compSelect === "scissors"){
      alert("you win");
    }
  });

  $("[data-throw=paper]").on("click", function(){
    var compSelect = hands[Math.floor(Math.random()*3)];
    if (compSelect === "rock"){
      alert("you win");
    } else if (compSelect === "paper"){
      alert("tie game");
    } else if (compSelect === "scissors"){
      alert("you lose");
    }
  });

  $("[data-throw=scissors]").on("click", function(){
    var compSelect = hands[Math.floor(Math.random()*3)];
    if (compSelect === "rock"){
      alert("you lose");
    } else if (compSelect === "paper"){
      alert("you win");
    } else if (compSelect === "scissors"){
      alert("tie game");
    }
  });

});