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
    var compSelect = hands[Math.floor(Math.random()*hands.length)];
    
    $("#round-count").html(gameCount);
    

    if (playerHand === compSelect){
      console.log("tie game");
      tieGame();
    } else if (playerHand === "rock" && compSelect === "paper"){
      console.log("you lose");
      getHit();
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
      getHit();
      computerWins++;
    } else if (playerHand === "scissors" && compSelect === "rock"){
      console.log("you lose");
      getHit();
      computerWins++;
    } else if (playerHand === "scissors" && compSelect === "paper"){
      console.log("you win");
      attack();
      playerWins++;
    }

    $("#player-wins").html(playerWins);
    $("#computer-wins").html(computerWins);

    console.log("you picked " + playerHand, "computer picked " + compSelect);
    console.log("player wins " + playerWins, ", computerWins " + computerWins, ", games played " + gameCount);
  });

    function tieGame (){
        $(".little-mac-animate").toggleClass("little-mac-animate little-mac-dodge-left");
        $(".littleMac").toggleClass("littleMac dodge-left");
        $(".tyson-animate").toggleClass("tyson-animate tyson-punch");
        $(".mikeTyson").toggleClass("mikeTyson tyson-left-upper");
        setTimeout(function(){
            $(".little-mac-dodge-left").toggleClass("little-mac-animate little-mac-dodge-left");
            $(".dodge-left").toggleClass("littleMac dodge-left");
            $(".tyson-punch").toggleClass("tyson-animate tyson-punch");
            $(".tyson-left-upper").toggleClass("mikeTyson tyson-left-upper");
        }, 1500)
    }

    function getHit(){
        $(".little-mac-animate").toggleClass("little-mac-animate");
        $(".littleMac").toggleClass("littleMac little-mac-hit");
        $(".tyson-animate").toggleClass("tyson-animate tyson-punch");
        $(".mikeTyson").toggleClass("mikeTyson tyson-left-upper");
        setTimeout(function(){
            $(".little-mac-animate").toggleClass("little-mac-animate");
            $(".little-mac-hit").toggleClass("littleMac little-mac-hit");
            $(".tyson-punch").toggleClass("tyson-animate tyson-punch");
            $(".tyson-left-upper").toggleClass("mikeTyson tyson-left-upper");
        }, 1500)
    }

    function attack(){
        $(".little-mac-animate").toggleClass("little-mac-animate little-mac-attack");
        $(".littleMac").toggleClass("littleMac little-mac-punch");
        $(".mikeTyson").toggleClass("mikeTyson tyson-hit");
        setTimeout(function(){
            $(".little-mac-attack").toggleClass("little-mac-animate little-mac-attack");
            $(".little-mac-punch").toggleClass("littleMac little-mac-punch");
            $(".tyson-hit").toggleClass("mikeTyson tyson-hit");
        }, 1500)
    }


});