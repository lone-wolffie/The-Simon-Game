let gamePattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence(){
    let randomNumber = Math.floor(Math.random() * 4) ; // Generates a random number between 0 and 3
    console.log(randomNumber);
}

let randomChosenColour = buttonColours[randomNumber]; // Selects a random colour from the buttonColours array
gamePattern.push(randomChosenColour); // Adds the selected colour to the gamePattern array






nextSequence();




