//refferences to DOM elements
const questionElement = document.getElementById("question");
const wordInputElement = document.getElementById("word-input");
const remainedLettersElement = document.getElementById("letters-remained");
const letterInputElement = document.getElementById("letter-input");
const wordElement = document.querySelector(".word");
const resultMessage = document.getElementById("result-message");
const playAgain = document.getElementById("play-again");
let allLetterElement;

//variables required for JS logic
const questionsWords = [["question1", "aaswer1"], ["question2", "answer2"]]
let currentIndex = 0;
let initialLetttersNumber;
let remainedLettersNumber;
let word;
let trials;
let finishMessage = "";
let flGameover = false;

//functions - 3 main stages
function startGame() {
    questionElement.innerHTML = questionsWords[currentIndex][0];
    word = getWord();
    trials=Math.floor(word.length*0.3);
    letterInputElement.value="";
    wordInputElement.value = "";
    wordInputElement.readOnly = true;
    playAgain.style.display = 'none';
    resultMessage.innerHTML = "";
    wordElement.innerHTML = getWordDivs();
    allLetterElement=document.querySelectorAll(".letter");
    remainedLettersElement.innerHTML=`Remained letters ${trials}`;
}
function getWord() {
    res = questionsWords[currentIndex][1];
if(currentIndex<questionsWords.length-1){
    currentIndex++;
}
return res;
}

function getWordDivs() {
    const arrayWord=Array.from(word);
    const ar=arrayWord.map(function(arg){
        arg='<div class="letter">'+arg+'</div>';
        return arg;

    })
    return ar.join("");
    
    

    //TODO - map,join or reduce

}

function checkWord() {
    //TODO

}
function processLetter() {
    // wordInputElement.readOnly = false
        if(flGameover){
        alert("The game is over, press play-again to play")
    }else{
        const trialLetter=letterInputElement.value;
        trials--;
        remainedLettersElement.innerHTML=`Remained letters ${trials}`;
        if(word.includes(trialLetter)){
            backgroungChange(allLetterElement,trialLetter)
        }

    }
}
function backgroungChange(allElements,trialLetter){
    for(let i=0;i<allElements.length;i++){
        if(allElements[i].innerHTML==trialLetter){
            allLetterElement[i].style.backgroundColor="white";
        }
    }
}
function takeChance() {
    //TODO

}
function finishGame() {
    //TODO

}


//actions
startGame();

