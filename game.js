const title = document.getElementById('title');
const attempt = document.getElementById('attempt');
const reset = document.getElementById('reset');
let listNumberSecret = [];
let maxIntents = 10;
let intents = 1;
let maxInt = 3;
let secretNumber = generateSecretNumber();

function assignItem(element, text){
    let elementHTML = document.querySelector(element);
    elementHTML.innerHTML = text;
}

title.innerHTML = 'Welcome to the secret number';

function generateSecretNumber() {
    let numberGenerate = Math.floor(Math.random() * maxIntents) + 1;
    if(listNumberSecret.length == maxIntents){
        assignItem('p', 'You discovered all of the secret numbers');
    } else{
        if(listNumberSecret.includes(numberGenerate)) {
            return generateSecretNumber();
        } else {
            listNumberSecret.push(numberGenerate);
            return numberGenerate;
        }
    } 
}


function insertSecretNumber(){
    let insertUser = parseInt(document.getElementById('insert').value);
    if(insertUser === secretNumber){
        assignItem('p', `You discovered the secret number in ${intents} ${(intents == 1) ? 'intent' : 'intents'}`);
        document.getElementById('reset').removeAttribute('disabled');
    } else{
        if(insertUser < secretNumber){
            assignItem('p','The number is higher than that! Try again');
        } else{
            assignItem('p','The number is lower than that! Try again');
        }
        intents++;
        clear();
    }
    if(intents > maxInt){
        alert(`You do not discovered the secret number, reached the maximum number of intents, you only had ${maxInt} intents`);
        initialConditional();
    }
    return;
}

function clear() {
    document.querySelector('#insert').value = '';
}

function initialConditional() {
    assignItem('p', `Pick a number from 1 to ${maxIntents}!`);
    secretNumber = generateSecretNumber();
    intents = 1;

}

reset.addEventListener('click', () => {
    clear();
    initialConditional();
    document.getElementById('reset').setAttribute('disabled', 'true');
})

initialConditional();
