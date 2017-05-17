let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');
//let thisMessage = document.getElementById('message');

function guess() {
    let input = document.getElementById('user-guess');
    if(answer == '' && attempt == ''){
        setHiddenFields();
    }
    if(!validateInput(input.value)) {
        return false;
    }
}

function setHiddenFields() {
    answer = Math.floor(Math.random() * 10000 ).toString();
    while(answer.length < 4){
        answer = '0' + answer.value;
    }
    attempt = 0; 
}

function setMessage(message) {
    document.getElementById('message').innerHTML = message;
}

function validateInput(input){
    if (input.length = 4){
        return true;
    } else {
        setMessage("Guesses must be exactly 4 charcters long");
        return false;
    }
}

function getResults(guess) {
    let originalGuess = guess;
    document.getElementById('results').innerHTML("<div class='row'>");
}