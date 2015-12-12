$(document).ready(function(){
  var rockPaperScissorFbase = new Firebase("https://boiling-heat-5230.firebaseio.com/");

  var LEADERBOARD_SIZE = 5;

  rockPaperScissorFbase.child("playerName").on("value", updateTable);
  $("#gameComplete").on("click", function(){
    rockPaperScissorFbase.child("userName").transaction(function(userWins) {
      return (userWins || 0) + 1;
    });
  });




  var hands = ["rock", "paper", "scissors"];
  var playerWins = 0;
  var computerWins = 0;
  var roundCount = 1;
  var playerHealth = 100;
  var tysonHealth = 100;

  $("#health").html(playerHealth);

  $("button").on("click", function(){
    
    var playerHand = $(this).data("throw");
    var compSelect = hands[Math.floor(Math.random()*hands.length)];
    
    $("#round-count").html(roundCount);
    

    if (playerHand === compSelect){
      console.log("tie game");
      tieGame();
    } else if (playerHand === "rock" && compSelect === "paper"){
      console.log("you lose");
      playerHealth-= 25;
      if (playerHealth === 0){
        littleMacDown();
      } else {
        getHit();
      }
    } else if (playerHand === "rock" && compSelect === "scissors"){
      console.log("you win");
      tysonHealth-= 25;
      if (tysonHealth === 0){
        tysonDown();
      } else {
        attack();
      }
    } else if (playerHand === "paper" && compSelect === "rock"){
      console.log("you win");
      tysonHealth-= 25;
      if (tysonHealth === 0){
        tysonDown();
      } else {
        attack();
      }
      playerWins++;
    } else if (playerHand === "paper" && compSelect === "scissors"){
      console.log("you lose");
      playerHealth-= 25;
      if (playerHealth === 0){
        littleMacDown();
      } else {
        getHit();
      }
    } else if (playerHand === "scissors" && compSelect === "rock"){
      console.log("you lose");
      playerHealth-= 25;
      if (playerHealth === 0){
        littleMacDown();
      } else {
        getHit();
      }
    } else if (playerHand === "scissors" && compSelect === "paper"){
      console.log("you win");
      tysonHealth-= 25;
      if (tysonHealth === 0){
        tysonDown();
      } else {
        attack();
      }
    }

    
    
    healthCheck();
    endRound();
    gameWin();
    $("#health").html(playerHealth);
    console.log("you picked " + playerHand, "computer picked " + compSelect);
    console.log("player wins " + playerWins, ", computerWins " + computerWins, ", games played " + roundCount);
  });

    function tieGame (){
        $(".little-mac-container").toggleClass("little-mac-animate little-mac-dodge-left");
        $(".littleMac-player").toggleClass("littleMac dodge-left");
        $(".tyson-animate").toggleClass("tyson-animate tyson-punch");
        $(".mikeTyson").toggleClass("mikeTyson tyson-left-upper");
        setTimeout(function(){
            $(".little-mac-dodge-left").toggleClass("little-mac-animate little-mac-dodge-left");
            $(".littleMac-player").toggleClass("littleMac dodge-left");
            $(".tyson-punch").toggleClass("tyson-animate tyson-punch");
            $(".tyson-left-upper").toggleClass("mikeTyson tyson-left-upper");
        }, 1100)
    }

    function getHit(){
        $(".little-mac-container").toggleClass("little-mac-animate");
        $(".littleMac-player").toggleClass("littleMac little-mac-hit");
        $(".tyson-animate").toggleClass("tyson-animate tyson-punch");
        $(".mikeTyson").toggleClass("mikeTyson tyson-left-upper");
        setTimeout(function(){
            $(".little-mac-container").toggleClass("little-mac-animate");
            $(".littleMac-player").toggleClass("littleMac little-mac-hit");
            $(".tyson-punch").toggleClass("tyson-animate tyson-punch");
            $(".tyson-left-upper").toggleClass("mikeTyson tyson-left-upper");
        }, 1100)
    }

    function attack(){
        $(".little-mac-container").toggleClass("little-mac-animate little-mac-attack");
        $(".littleMac-player").toggleClass("littleMac little-mac-punch");
        $(".mikeTyson").toggleClass("mikeTyson tyson-hit");
        setTimeout(function(){
            $(".little-mac-attack").toggleClass("little-mac-animate little-mac-attack");
            $(".little-mac-punch").toggleClass("littleMac little-mac-punch");
            $(".tyson-hit").toggleClass("mikeTyson tyson-hit");
        }, 1100)
    }

    function littleMacDown(){
        $(".little-mac-container").toggleClass("little-mac-animate little-mac-knockdown");
        $(".littleMac-player").toggleClass("littleMac little-mac-down");
        $(".tyson-animate").toggleClass("tyson-animate tyson-punch");
        $(".mikeTyson").toggleClass("mikeTyson tyson-left-upper");
        setTimeout(function(){
            $(".little-mac-container").toggleClass("little-mac-animate little-mac-knockdown");
            $(".littleMac-player").toggleClass("littleMac little-mac-down");
            $(".tyson-punch").toggleClass("tyson-animate tyson-punch");
            $(".tyson-left-upper").toggleClass("mikeTyson tyson-left-upper");
        }, 1100)
    }

    function tysonDown(){
        $(".little-mac-container").toggleClass("little-mac-animate little-mac-attack");
        $(".littleMac-player").toggleClass("littleMac little-mac-punch");
        $(".mikeTyson").toggleClass("mikeTyson tyson-down");
        setTimeout(function(){
            $(".little-mac-container").toggleClass("little-mac-animate little-mac-attack");
            $(".littleMac-player").toggleClass("littleMac little-mac-punch");
            $(".tyson-down").toggleClass("mikeTyson tyson-down");
        }, 3000);
    }

    function healthCheck(){
        if (playerHealth === 0){
            alert("get up!");
        }
    }

    function endRound(){
        if (playerHealth === 0 || tysonHealth === 0) {
            roundCount++;
            $("#round-count").html(roundCount);
            if (tysonHealth === 0) {
                playerWins++;
            } else if (playerHealth === 0) {
                computerWins++;
            }
            $("#player-wins").html(playerWins);
            $("#computer-wins").html(computerWins);
            playerHealth = 100;
            tysonHealth = 100;
        }
    }

    function gameWin() {
        // add code if computer or player reaches 5 wins they win the game
        if (playerWins === 5) {
            alert("you win");
        } else if (computerWins === 5) {
            alert("tyson beat you");
        }
    }


});