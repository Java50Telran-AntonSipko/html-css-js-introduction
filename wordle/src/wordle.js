//refferences to DOM elements
const guessInputElement = document.querySelector(".guess-input");
const guessLettersElement = document.querySelector(".guess-letters");
let lettersDivs;
const trialsElement = document.querySelector(".trials-remained");
const gameResultElement = document.querySelector(".game-result");
const playAgainElement = document.querySelector(".play-again");
//variables required for JS logic
const wordsForGuess = ['pappy', 'apple', 'table', 'gold', 'silver', 'index', 'scrypt', 'peace', 'picture']
let trials;
let word;
let flGameover = false;
//functions - 3 main stages
function startGame() {
    word = getWord();
    fillLettersDivs();
    flGameover=false;
    trials=word.length+1;
    trialsElement.innerHTML=`Remained trials ${trials}`;
    playAgainElement.style.display="none";
    gameResultElement.innerHTML="";
   
    
}
function getWord(){
    const index=Math.trunc(Math.random() * wordsForGuess.length);
    return wordsForGuess[index];
}
function fillLettersDivs(){
    const arrayWord=Array.from(word);
    guessLettersElement.innerHTML=arrayWord.reduce(function(res,cur){
        res =res + '<div class="letter"></div>'
        return res;

    },'');
    lettersDivs=document.querySelectorAll(".letter");

}

function onChange() {
    if(flGameover){
        alert("Game is over,press play again button")
    }else{
        const trialWord=guessInputElement.value;
        trials--;
        trialsElement.innerHTML=`Remained trials: ${trials}`;
    if(trialWord.length!=word.length){
        alert("Wrong number of letters");
    }else{
        coloringWord(trialWord);
    }

    }
    if(trials<1|| guessInputElement.value==word ){
        flGameover=true;
        return finishGame();
        
    }
    
}
function  coloringWord(trialWord){
    const arWord=Array.from(trialWord);
    arWord.forEach(function(letter,index){
        lettersDivs[index].innerHTML=letter;
        lettersDivs[index].style.color=getColor(letter,index);

    })
}
function getColor(letter,index){
    let res="red";
    if(word.includes(letter)){
        res=word[index]==letter? "green":"yellow"
    }
    return res;
}
function finishGame() {
    if(trials<1){
        gameResultElement.innerHTML="Sorry you haven't guessed the word,try again"
    }else{
        gameResultElement.innerHTML=`Congratulations you guessed the word! Number of attempts : ${(word.length+1)-trials}`

    }
    playAgainElement.style.display="block";


   


   

}
function gameEndingCon(){
    const trialWord=guessInputElement.value;
    if(trials<1|| trialWord==word ){
        return true;
    }
}
//actions
startGame();


