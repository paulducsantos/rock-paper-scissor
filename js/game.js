$(document).ready(function(){


  var hands = ["rock", "paper", "scissor"];


  $("[data-throw=rock]").on("click", function(){
    var compSelect = hands[Math.floor(Math.random()*2)];
  });

});