$(document).ready(function(){

  var inputs = ["grocery1", "grocery2", "grocery3", "grocery4", "grocery5"];

  $("#grocery-list").submit(function(event){
    event.preventDefault();
    $("#grocery-list").hide();

    var newGuy = []

    inputs.forEach(function(input){
        var userInput = $("input#" + input).val();
        newGuy.push(userInput);
    });

    newGuy.sort();

    newGuy.forEach(function(input){
    $("#finished-list").append("<li>" + input.toUpperCase() + "</li>");
    $("#ordered-list-div").show();
  });
});
});
