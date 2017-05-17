let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');
//let thisMessage = document.getElementById('message');

function guess() {
    let input = document.getElementById('user-guess');
    if(answer == '' && attempt == ''){
        setHiddenFields();
    }
    if(!validateInput(input.value)) {
        return;
    } 
    attempt.value++;
}

function setHiddenFields() {
    answer.value = Math.floor(Math.random() * 10000 ).toString();
    while(answer.value.length < 4){
        answer.value = '0' + answer.value;
    }
    attempt = 0;
    console.log(answer.value);
}

function setMessage(message) {
    document.getElementById('message').innerHTML = message;
}

function validateInput(input){
    if (input.length != 4){
        setMessage("Guesses must be exactly 4 characters long.");
        return false;
    }
    return true;
}

function getResults(input) {
    let html = "<div class='row'><span class='col-md-6>'" + input + "</span><div class='col-md-6>'";
    for (var i = 0; i < input.length; i++) {
        if(input.charAt(i) == answer.value.charAt(i)){
            html += "<span class='glyphicon glyphicon-ok'></span>";
        } else if(answer.value.indexOf(input.charAt(i)) > -1){
            html += "<span class='glyphicon glyphicon-transfer'></span>";
        } else {
            html += "<span class='glyphicon glyphicon-remove'></span>";
        }
    }
    html += "</div></div>";
    document.getElementById("results").innerHTML += html;
}