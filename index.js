var randomNumber = Math.floor(Math.random()*100);
const userInput = document.querySelector("#guessednumber");
const submitButton = document.querySelector("#submitbutton");
const startButton = document.querySelector('#startbutton');
const guessesremaining = document.querySelector("#guessesremaining");
const numbersguessed = document.querySelector("#numbersguessed");
const gameresult = document.querySelector("#gameresult");
const hint = document.querySelector("#hint");
var chances = 10

const guessOnClick = (event) => {
    if (!chances) {
        submitButton.disabled = true;
        gameresult.innerHTML = "Game OVER!";
        gameresult.style.display = 'block';
        startButton.style.display = 'block';
        return;
    }
    chances--;
    const userGuess = parseInt(userInput.value);
    if (userGuess == randomNumber) {
        gameresult.innerHTML = "You WON!";
        gameresult.style.display = 'block';
        startButton.style.display = 'block';
        return;
    }
    else if (userGuess < randomNumber)
        hint.innerHTML = 'Higher';
    else hint.innerHTML = 'Lower';
    var numbersGuessed = numbersguessed.textContent;
    numbersGuessed = numbersGuessed + ' ' + userInput.value;
    numbersguessed.innerHTML = numbersGuessed;
    guessesremaining.innerHTML = chances;
    userInput.value = '';
};

const startOnClick = (event) => {
    chances = 10;
    gameresult.style.display = 'none';
    hint.innerHTML = '';
    guessesremaining.innerHTML = chances;
    numbersguessed.innerHTML = '';
    startButton.style.display = 'none';
    randomNumber = Math.floor(Math.random()*100);
};

submitButton.addEventListener("click", guessOnClick);
startButton.addEventListener("click", startOnClick);
