var wins = 0
var losses = 0
var counter = 0
var targetNumber = Math.floor((Math.random() * 120 - 19 + 1) + 19)

$("#counter-text").text("Counter: " + counter)
$("#target-text").text("Target: " + targetNumber)
$("#wins-text").text("Wins: " + wins)
$("#losses-text").text("Losses: " + losses)

var crystal1value = Math.floor((Math.random() * 12 - 2 + 1) + 2)
var crystal2value = Math.floor((Math.random() * 12 - 2 + 1) + 2)
var crystal3value = Math.floor((Math.random() * 12 - 2 + 1) + 2)
var crystal4value = Math.floor((Math.random() * 12 - 2 + 1) + 2)

$("#crystal-1").on("click", function() {
    counter = crystal1value + counter
    $("#counter-text").text("Counter: " + counter)

    if (counter == targetNumber) {
        alert ("You won! The target was " + targetNumber + " and your counter reached " + counter + ". Good job!")
        wins++
        $("#wins-text").text("Wins: " + wins)
        counter = 0
        $("#counter-text").text("Counter: " + counter)
        targetNumber = Math.floor((Math.random() * 120 - 19 + 1) + 19)
        $("#target-text").text("Target: " + targetNumber)
        crystal1value = Math.floor((Math.random() * 12 - 2 + 1) + 2)
        crystal2value = Math.floor((Math.random() * 12 - 2 + 1) + 2)
        crystal3value = Math.floor((Math.random() * 12 - 2 + 1) + 2)
        crystal4value = Math.floor((Math.random() * 12 - 2 + 1) + 2)
        }
        

    else if (counter > targetNumber) {
        alert ("You lost! The target was " + targetNumber + " but your counter reached " + counter + ". Try again!")
        losses++
        $("#losses-text").text("Losses: " + losses)
        counter = 0 
        $("#counter-text").text("Counter: " + counter)
        targetNumber = Math.floor((Math.random() * 120 - 19 + 1) + 19)
        $("#target-text").text("Target: " + targetNumber)
        crystal1value = Math.floor((Math.random() * 12 - 2 + 1) + 2)
        crystal2value = Math.floor((Math.random() * 12 - 2 + 1) + 2)
        crystal3value = Math.floor((Math.random() * 12 - 2 + 1) + 2)
        crystal4value = Math.floor((Math.random() * 12 - 2 + 1) + 2)
        }

}) 

$("#crystal-2").on("click", function() {
    counter = crystal2value + counter
    $("#counter-text").text("Counter: " + counter);

    if (counter == targetNumber) {
        alert ("You won! The target was " + targetNumber + " and your counter reached " + counter + ". Good job!")
        wins++
        $("#wins-text").text("Wins: " + wins)
        counter = 0
        $("#counter-text").text("Counter: " + counter)
        targetNumber = Math.floor((Math.random() * 120 - 19 + 1) + 19)
        $("#target-text").text("Target: " + targetNumber)
        crystal1value = Math.floor((Math.random() * 12 - 2 + 1) + 2)
        crystal2value = Math.floor((Math.random() * 12 - 2 + 1) + 2)
        crystal3value = Math.floor((Math.random() * 12 - 2 + 1) + 2)
        crystal4value = Math.floor((Math.random() * 12 - 2 + 1) + 2)
        }

    else if (counter > targetNumber) {
        alert ("You lost! The target was " + targetNumber + " but your counter reached " + counter + ". Try again!")
        losses++
        $("#losses-text").text("Losses: " + losses)
        counter = 0 
        $("#counter-text").text("Counter: " + counter)
        targetNumber = Math.floor((Math.random() * 120 - 19 + 1) + 19)
        $("#target-text").text("Target: " + targetNumber)
        crystal1value = Math.floor((Math.random() * 12 - 2 + 1) + 2)
        crystal2value = Math.floor((Math.random() * 12 - 2 + 1) + 2)
        crystal3value = Math.floor((Math.random() * 12 - 2 + 1) + 2)
        crystal4value = Math.floor((Math.random() * 12 - 2 + 1) + 2)
        }
}) 

$("#crystal-3").on("click", function() {
    counter = crystal3value + counter
    $("#counter-text").text("Counter: " + counter);

    if (counter == targetNumber) {
        alert ("You won! The target was " + targetNumber + " and your counter reached " + counter + ". Good job!")
        wins++
        $("#wins-text").text("Wins: " + wins)
        counter = 0
        $("#counter-text").text("Counter: " + counter)
        targetNumber = Math.floor((Math.random() * 120 - 19 + 1) + 19)
        $("#target-text").text("Target: " + targetNumber)
        crystal1value = Math.floor((Math.random() * 12 - 2 + 1) + 2)
        crystal2value = Math.floor((Math.random() * 12 - 2 + 1) + 2)
        crystal3value = Math.floor((Math.random() * 12 - 2 + 1) + 2)
        crystal4value = Math.floor((Math.random() * 12 - 2 + 1) + 2)
        }

    else if (counter > targetNumber) {
        alert ("You lost! The target was " + targetNumber + " but your counter reached " + counter + ". Try again!")
        losses++
        $("#losses-text").text("Losses: " + losses)
        counter = 0 
        $("#counter-text").text("Counter: " + counter)
        targetNumber = Math.floor((Math.random() * 120 - 19 + 1) + 19)
        $("#target-text").text("Target: " + targetNumber)
        crystal1value = Math.floor((Math.random() * 12 - 2 + 1) + 2)
        crystal2value = Math.floor((Math.random() * 12 - 2 + 1) + 2)
        crystal3value = Math.floor((Math.random() * 12 - 2 + 1) + 2)
        crystal4value = Math.floor((Math.random() * 12 - 2 + 1) + 2)
        }
}) 

$("#crystal-4").on("click", function() {
    counter = crystal4value + counter
    $("#counter-text").text("Counter: " + counter);

    if (counter == targetNumber) {
        alert ("You won! The target was " + targetNumber + " and your counter reached " + counter + ". Good job!")
        wins++
        $("#wins-text").text("Wins: " + wins)
        counter = 0
        $("#counter-text").text("Counter: " + counter)
        targetNumber = Math.floor((Math.random() * 120 - 19 + 1) + 19)
        $("#target-text").text("Target: " + targetNumber)
        crystal1value = Math.floor((Math.random() * 12 - 2 + 1) + 2)
        crystal2value = Math.floor((Math.random() * 12 - 2 + 1) + 2)
        crystal3value = Math.floor((Math.random() * 12 - 2 + 1) + 2)
        crystal4value = Math.floor((Math.random() * 12 - 2 + 1) + 2)
        }

    else if (counter > targetNumber) {
        alert ("You lost! The target was " + targetNumber + " but your counter reached " + counter + ". Try again!")
        losses++
        $("#losses-text").text("Losses: " + losses)
        counter = 0 
        $("#counter-text").text("Counter: " + counter)
        targetNumber = Math.floor((Math.random() * 120 - 19 + 1) + 19)
        $("#target-text").text("Target: " + targetNumber)
        crystal1value = Math.floor((Math.random() * 12 - 2 + 1) + 2)
        crystal2value = Math.floor((Math.random() * 12 - 2 + 1) + 2)
        crystal3value = Math.floor((Math.random() * 12 - 2 + 1) + 2)
        crystal4value = Math.floor((Math.random() * 12 - 2 + 1) + 2)
        }
}) 
