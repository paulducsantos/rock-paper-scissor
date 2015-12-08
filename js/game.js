$(document).ready(function(){


  var hands = ["rock", "paper", "scissors"];
  var playerWins = 0;
  var computerWins = 0;
  var gameCount = 0;

  $("button").on("click", function(){
    if (gameCount === 5){
    playerWins = 0;
    computerWins = 0;
    gameCount = 0;
    }
    gameCount++;
    var playerHand = $(this).data("throw");
    var compSelect = hands[Math.floor(Math.random()*3)];
    
    // change to case statement instead
    // if (playerHand === compSelect){
    //   alert("tie game");
    // } else if (playerHand === "rock" && compSelect === "paper"){
    //   alert("you lose");
    //   computerWins++;
    // } else if (playerHand === "rock" && compSelect === "scissors"){
    //   alert("you win");
    //   playerWins++;
    // } else if (playerHand === "paper" && compSelect === "rock"){
    //   alert("you win");
    //   playerWins++;
    // } else if (playerHand === "paper" && compSelect === "scissors"){
    //   alert("you lose");
    //   computerWins++;
    // } else if (playerHand === "scissors" && compSelect === "rock"){
    //   alert("you lose");
    //   computerWins++;
    // } else if (playerHand === "scissors" && compSelect === "paper"){
    //   alert("you win");
    //   playerWins++;
    // }
    
    console.log("you picked " + playerHand, "computer picked " + compSelect);
    console.log("player wins " + playerWins, ", computerWins " + computerWins, ", games played " + gameCount);
  });

  

});