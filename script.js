function printData(data,containerName) {
    const container=document.querySelector(containerName);
    container.innerText=data
    }
const buttons=document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click",clearPrintOutcome);
    button.addEventListener("click",game);
    });

    function computerSelection(){ 
        //Randomized CPU play: If 0 return rock, if 1 return paper else return scissors
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

function game(evt){
    let playerSelection=evt.target.textContent;
    let computerPlay=computerSelection();
    let roundOutcome={"score":roundResult(playerSelection,computerPlay),"playerSelection":playerSelection,"computerSelection":computerPlay};
    printOutcome(roundOutcome)
}

function printOutcome(roundOutcome){
    if(roundOutcome.score[0]===1) {
        printData("Congratulations, you won!!",".outcomeInfo"); 
        }
    else if (roundOutcome.score[1]===1) {
        printData("Uh oh, CPU won...",".outcomeInfo");   
        }
    else{
        printData("It's a draw!!!",".outcomeInfo"); 
        return
    }
    printData(`****** Welcome to round 1 ******`,".roundNumber");
    printData(`human played ${roundOutcome.playerSelection} and scored ${roundOutcome.score[0]}`,"#playerScore"); 
    printData(`CPU played ${roundOutcome.computerSelection} and scored ${roundOutcome.score[1]}`,"#computerScore"); 
    //printData(` ****** End of round ${round} out of ${numberRounds} ******`,".roundEndInfo");
}

function clearPrintOutcome(){
    printData('',".outcomeInfo");
    printData('',"#playerScore");
    printData('',"#computerScore");
}

function roundResult(playerSelection,computerSelection){
    //Determines the outcome of a round of rock, paper scissors. 
    //If user wins +1, if user looses -1, if draw 0
    gameHierarchy={"rock":"scissors","paper":"rock","scissors":"paper"};
    if (playerSelection===computerSelection){
        return [0,0];
    }
    if (gameHierarchy[playerSelection]===computerSelection){
        return [1,0];
    }
    else {
        return [0,1];
    } 
}






/////////////Not in use////////////
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

function lowerCaseInput(playerSelection){
    return playerSelection.toString().toLowerCase();
}

// function gameOutcome(playerScore,computerScore){
//     if (playerScore===computerScore){
//         return `It is a draw: HUM ${playerScore} - CPU ${computerScore}`;
//     }
//     else if (playerScore>computerScore){
//         return `Player wins, the final score is: HUM ${playerScore} - CPU ${computerScore}`;
//     }
//     else {
//         return `Computer wins, the final score is: HUM ${playerScore} - CPU ${computerScore}`;
//     }
// }

// function roundOutcome(gameRound,playerSelection,computerSelection){
//     if (gameRound===1){
//         return `You win, ${playerSelection} beat ${computerSelection}`;
//     } 
//     else if (gameRound===-1){
//         return `You loose, ${computerSelection} beat ${playerSelection}`;
//     }
//     else {
//         return `It's a draw, both of you played ${playerSelection}`;
//     }
// }