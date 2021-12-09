function printData(data,containerName) {
    const container=document.querySelector(containerName);
    container.innerText=data
    }


const buttons=document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click",game);
    });



//function game(numberRounds=5){
    function game(){
    //Initiates a game of rock paper scissors with by default numbers of round=5
    //starts by zeroing scores and intialising players moves at each new round
    //determines outcome at each round with roundResult
    //displays in console result using roundOutcomme
    //increments scores accordingly
    //on the last round displays final results using gameOutcome
    let playerScore =0;
    let computerScore =0;
    let numberRounds=1;
    for (round=1;round<=numberRounds;round++){
        //let playerSelection=humanPlay();
        let playerSelection=this.innerText;
        if (abortGame(playerSelection)==="exitGame"){
            return "Game has been aborted by player, bye bye"
        } 
        let computerSelection=computerPlay();
        let roundResult=gameRound(playerSelection,computerSelection)
        switch(roundResult) {   
            case 1: playerScore+=1
                    break;
            case -1:computerScore+=1
                    break;
        }
        printData(` ****** End of round ${round} out of ${numberRounds} ******`,".roundEndInfo");
        printData(`****** Welcome to round ${round} ******`,".roundStartInfo");
        printData(roundOutcome(roundResult,playerSelection,computerSelection),".outcomeInfo");
        printData(`Current score: Player @ ${playerScore} VS Computer @ ${computerScore}`,".scoreInfo");

    }
    return gameOutcome(playerScore,computerScore);
}
function abortGame(endGame){
    //returns exitGame when user enters no value in prompt box to exit game
    if (lowerCaseInput(endGame)===""){
        return "exitGame";
    }
}
function humanPlay(){
    //Prompts user to enter his move or to abort game - prompt will stay until accepted value is entered
    let playerSelection=lowerCaseInput(prompt("Time to play, please choose between: rock, paper, scissors. To exit please press enter"));
    while (playerSelection!=="rock" && playerSelection!=="paper" && playerSelection!=="scissors" && playerSelection!==""){
        playerSelection=lowerCaseInput(prompt("Incorrect input, please enter a correct value: rock, paper, scissors. To exit please press enter"));
    }
        return playerSelection;
}

function computerPlay(){ 
    //Create a random integer between 0 and 2 included. 
    //If 0 return rock, if 1 return paper if 2 return scissors
    let randomOutcome=Math.floor(Math.random()*3)            
    if (randomOutcome===0) {
        return "rock";
    }
    else if (randomOutcome===1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function lowerCaseInput(playerSelection){
    return playerSelection.toString().toLowerCase();
}
function gameRound(playerSelection,computerSelection){
    //Determines the outcome of a round of rock, paper scissors. 
    //If user wins +1, if user looses -1, if draw 0
    if (playerSelection===computerSelection){
        return 0;
    }
    if ((playerSelection==="rock" && computerSelection==="scissors")||(playerSelection==="paper" && computerSelection==="rock")||(playerSelection==="scissors" && computerSelection==="paper")){
        return 1;
    }
    else {
        return -1;
    } 
}

function roundOutcome(gameRound,playerSelection,computerSelection){
    //Phrases the round outcome based on:
    //gameRound result and players input
    if (gameRound===1){
        return `You win, ${playerSelection} beat ${computerSelection}`;
    } 
    else if (gameRound===-1){
        return `You loose, ${computerSelection} beat ${playerSelection}`;
    }
    else {
        return `It's a draw, both of you played ${playerSelection}`;
    }
}

function gameOutcome(playerScore,computerScore){
    //Phrases game outcome after last based on players' scores
    if (playerScore===computerScore){
        return `It is a draw: HUM ${playerScore} - CPU ${computerScore}`;
    }
    else if (playerScore>computerScore){
        return `Player wins, the final score is: HUM ${playerScore} - CPU ${computerScore}`;
    }
    else {
        return `Computer wins, the final score is: HUM ${playerScore} - CPU ${computerScore}`;
    }
}