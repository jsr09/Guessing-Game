// Initialize Game Title
const gameTitle = document.body.querySelector('#gameTitle');
gameTitle.style.color = 'blue';

// Initialize Game Instructions
const instructions = document.getElementById('gameInstructions');
instructions.style.color = 'red';

// Add functionality to Answer Box
const inputValue = document.body.querySelector('#answerBox');

    // Create input function
function input(num) {
    const guess = document.getElementById('secondContainer');
    const userInput = document.getElementById('answerBox');

    userInput = num
    secondContainer.firstChild.nodeValue = num
};



// inputValue.addEventListener('input', input(){
//     console.log(input("5"));
// })

// Add functionality to Go! Button
const goButton = document.body.querySelector('#enterAnswer');
goButton.addEventListener('click', input() {
    console.log("This works!");
    
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