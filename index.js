const number = (math.floor(math.random)* 100) 

// Initialize Game Title
const gameTitle = document.body.querySelector('#gameTitle');
gameTitle.style.color = 'blue';

// Initialize Game Instructions
const instructions = document.getElementById('gameInstructions');
instructions.style.color = 'red';

// Add functionality to Answer Box
const inputValue = document.body.querySelector('#answerBox');
const guesses = []

// Add functionality to Go! Button
const goButton = document.body.querySelector('#enterAnswer');
goButton.addEventListener('click', function() {
    console.log("This works!");

    guesses.push(inputValue.value)
    

    if(guesses[0]) document.body.querySelector('.guess1').innerHTML = guesses[0]
    if(guesses[1]) document.body.querySelector('.guess2').innerHTML = guesses[1]
    if(guesses[2]) document.body.querySelector('.guess3').innerHTML = guesses[2]
    if(guesses[3]) document.body.querySelector('.guess4').innerHTML = guesses[3]
    if(guesses[4]) document.body.querySelector('.guess5').innerHTML = guesses[4]
    console.log(guesses);
});

// Add functionality to Try Again Button
const retryButton = document.getElementById('resetButton');
retryButton.addEventListener('click', function() {
    console.log("This also works!");
})

// Add functionality to Hint Button
const hintButton = document.getElementById('hintButton');
hintButton.addEventListener('click', function(){
    console.log("Hey this works too!");
})