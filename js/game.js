$(document).ready(function(){

  var hands = ["rock", "paper", "scissors"];
  var playerWins = 0;
  var computerWins = 0;
  var roundCount = 0;
  var playerHealth = 100;

  $("#health").html(playerHealth);

  $("button").on("click", function(){
    if (roundCount === 5){
    playerWins = 0;
    computerWins = 0;
    roundCount = 0;
    }
    roundCount++;
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
      computerWins++;
    } else if (playerHand === "rock" && compSelect === "scissors"){
      console.log("you win");
      attack();
      playerWins++;
    } else if (playerHand === "paper" && compSelect === "rock"){
      console.log("you win");
      attack();
      playerWins++;
    } else if (playerHand === "paper" && compSelect === "scissors"){
      console.log("you lose");
      playerHealth-= 25;
      if (playerHealth === 0){
        littleMacDown();
      } else {
        getHit();
      }
      computerWins++;
    } else if (playerHand === "scissors" && compSelect === "rock"){
      console.log("you lose");
      playerHealth-= 25;
      if (playerHealth === 0){
        littleMacDown();
      } else {
        getHit();
      }
      computerWins++;
    } else if (playerHand === "scissors" && compSelect === "paper"){
      console.log("you win");
      attack();
      playerWins++;
    }

    $("#player-wins").html(playerWins);
    $("#computer-wins").html(computerWins);
    $("#health").html(playerHealth);
    healthCheck();
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

    function healthCheck(){
        if (playerHealth === 0){
            alert("get up!");
        }
    }


});