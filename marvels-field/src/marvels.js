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
const questionsWords = [["Capital city of Israel", "jerusalem"], ["Highest mountain in the world ", "everest"],["Capital city of USA ", "washington"],["Founder of Tesla company ", "elon mask"]]
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
    reversechangingInputs();
    

}
function getWord() {
    res = questionsWords[currentIndex][1];
if(currentIndex<questionsWords.length-1){
    currentIndex++;
}else{
    currentIndex=0;
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
}

function checkWord() {
   if(wordInputElement.value==word){
    resultMessage.innerHTML ="Congratulation you are Winner!!!"
   }else{
    resultMessage.innerHTML ="YOU LOST THIS GAME,Press:play again button"
   }
   playAgain.style.display="block";

}
function processLetter() {
    // wordInputElement.readOnly = false
        const trialLetter=letterInputElement.value;
        trials--;
        remainedLettersElement.innerHTML=`Remained letters ${trials}`;
        if(word.includes(trialLetter)){
            backgroungChange(allLetterElement,trialLetter)
        }
        if(!trials){
            changingInputs();
            
        }
        if(wordInputElement.value!=""){
            finishGame();
        }

    
}
function changingInputs(){
    if(trials!=0){
        trials=0;
        remainedLettersElement.innerHTML=`Remained letters ${trials}`;

    }
    wordInputElement.readOnly=false;
            letterInputElement.value="";
            letterInputElement.readOnly=true;
}
function reversechangingInputs(){
    wordInputElement.readOnly=true;
            letterInputElement.readOnly=false;
}
function backgroungChange(allElements,trialLetter){
    for(let i=0;i<allElements.length;i++){
        if(allElements[i].innerHTML==trialLetter){
            allLetterElement[i].style.backgroundColor="white";
        }
    }
}
function takeChance() {
    changingInputs();
}
function finishGame() {
    checkWord();
    flGameover=true;
    

    //TODO

}


//actions
startGame();

