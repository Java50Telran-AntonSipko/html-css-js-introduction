//refferences to DOM elements
const questionElement=document.getElementById("question");
const wordInputElement=document.getElementById("word-input");
const remainedLettersElement=document.getElementById("letters-remained");
const letterInputElement=document.getElementById("letter-input");
const wordElement=document.querySelector(".word");
const resultMessage=document.getElementById("result-message");
const playAgain=document.getElementById("play-again");
let wordLettersElement;

//variables required for JS logic
const questionsWords=[["question1","answer1"],["question2","answer2"]]
let currentIndex=0;
let initialLetttersNumber;
let remainedLettersNumber;
let word;
let trials;
let finishMessage="";
flGameover=false;

//functions - 3 main stages
function startGame(){
    word=getWord();
    wordInputElement.value="";
    wordElement.readOnly=true;
    questionElement.innerHTML=questionsWords[currentIndex][0];
    playAgain.style.display="none";
    resultMessage.innerHTML="";
    wordElement.innerHTML=getWordDivs();


}
function getWord(){
    res=questionsWords[currentIndex][1];
    if(currentIndex==questionsWords.length){
        currentIndex=0;
    }else{
        currentIndex++;
    }
    return res;

}

function getWordDivs(){

        //TODO - map,join or reduce
        
    }

function checkWord(){
//TODO

}
function processLetter(){
    //TODO
}
function takeChance(){
    //TODO

}
function finishGame(){
    //TODO

}


//actions


