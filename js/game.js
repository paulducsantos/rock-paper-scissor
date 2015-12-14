$(document).ready(function(){

  $("#game-start").modal("show");


  var LEADERBOARD_SIZE = 5;
  var leaderBoards = new Firebase("https://boiling-heat-5230.firebaseio.com/leaderBoards");
  htmlForPath = {};

  function handleScoreAdded(scoreSnapshot, prevScoreName) {
    var newScoreRow = $("<tr/>");
    newScoreRow.append($("<td/>").append($("<em/>").text(scoreSnapshot.val().name)));
    newScoreRow.append($("<td/>").text(scoreSnapshot.val().score));

    htmlForPath[scoreSnapshot.key()] = newScoreRow;

    if (prevScoreName === null) {
      $("#leaderboardTable").append(newScoreRow);
    }
    else {
      var lowerScoreRow = htmlForPath[prevScoreName];
      lowerScoreRow.before(newScoreRow);
    }
  }

  function handleScoreRemove(scoreSnapshot) {
    var removedScoreRow = htmlForPath[scoreSnapshot.key()];
    removedScoreRow.remove();
    delete htmlForPath[scoreSnapshot.key()];
  }
  
  var leaderBoardsView = leaderBoards.limitToLast(LEADERBOARD_SIZE);

  leaderBoardsView.on("child_added", function(newScoreSnapshot, prevScoreName){
    handleScoreAdded(newScoreSnapshot, prevScoreName);
  });

  leaderBoardsView.on("child_removed", function(oldScoreSnapshot){
    handleScoreRemove(oldScoreSnapshot);
  });

  var changedCallback = function (scoreSnapshot, prevScoreName) {
    handleScoreRemoved(scoreSnapshot);
    handleScoreAdded(scoreSnapshot, prevScoreName);
  }

  leaderBoardsView.on('child_moved', changedCallback);
  leaderBoardsView.on('child_changed', changedCallback);


  var hands = ["rock", "paper", "scissors"];
  var playerWins = 3;
  var computerWins = 0;
  var roundCount = 4;
  var playerHealth = 100;
  var tysonHealth = 100;

  $("#health").html(playerHealth);

  $(".selection").on("click", function(){

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

    endRound();
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

    function endRound(){
        if (playerHealth === 0 || tysonHealth === 0) {
          roundCount++;
          $("#round-count").html(roundCount);
          if (roundCount < 5) {
            if (tysonHealth === 0) {
              playerWins++;
              $("#win-round").modal("show");
            } else if (playerHealth === 0) {
              computerWins++;
              $("#lose-round").modal("show");
            }
          } else {
            if (tysonHealth === 0) {
              playerWins++;
              $("#win-round").modal("show");
              $("#win-round").on("hide.bs.modal", gameWin)
            } else if (playerHealth === 0) {
              computerWins++;
              $("#lose-round").modal("show");
              $("#lose-round").on("hide.bs.modal", gameWin)
            }
          }
            


            $("#player-wins").html(playerWins);
            $("#computer-wins").html(computerWins);
            playerHealth = 100;
            tysonHealth = 100;
        }
    }

    function gameWin() {
        // add code if computer or player reaches 5 wins they win the game
        if (playerWins > computerWins) {
          $("#game-winner").html($("#name-input").val() + " WINS THE MATCH!");
          $("#leaderboards").modal("show");
        } else if (computerWins > playerWins) {
          $("#game-winner").html($("#name-input").val() + " LOSES THE MATCH! WOMP WOMP");
          $("#leaderboards").modal("show");
        }
        var userName = $("#name-input").val().trim();

        var playerData = leaderBoards.child(userName);

        playerData.setWithPriority({
          name: userName,
          score: playerWins
        }, playerWins);
    }
    
    $("#restart-game").on("click", function(){
      playerHealth = 100;
      tysonHealth = 100;
      roundCount = 1;
      playerWins = 0;
      computerWins = 0;
      $("#leaderboards").model("hide");
    })
});