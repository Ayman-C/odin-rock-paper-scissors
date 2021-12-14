let roundNumber=0;
let totalScore=[0,0];
let gameOver=false;
gameStart()


function printData(data,containerName) {
    const container=document.querySelector(containerName);
    container.innerText=data
    }


function gameStart() {
    const buttons=document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click",clearPrintOutcome);
        button.addEventListener("click",game);
        button.addEventListener("click",dataCounter);
        
    });
}

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

function gameEnd(){
    if (gameOver===true) {
        const buttons=document.querySelectorAll("button");
        buttons.forEach((button) => {
            button.removeEventListener("click",clearPrintOutcome);
            button.removeEventListener("click",game);
            button.removeEventListener("click",dataCounter);
            })
            if (document.getElementById("button4")===null) {
                buttonRestart=document.createElement("button");
                document.getElementById("buttonArea").appendChild(buttonRestart);
                buttonRestart.id="button4"
                buttonRestart.innerText="Restart?"
                document.getElementById("button4").setAttribute("class","buttons")
            }

            document.getElementById("button4").addEventListener("click",function(){gameOver=false});
            document.getElementById("button4").addEventListener("click",clearPrintOutcome);
            document.getElementById("button4").addEventListener("click",gameStart);
            document.getElementById("button4").addEventListener("click",function(){this.remove()});
            totalScore=[0,0];
            roundNumber=0;
        }

      

    
}

function dataCounter(){
    let roundData=document.querySelector(".roundInfo");
    if (roundNumber===0){
        roundData.innerText=`Round number: 1`
        roundNumber=1;
    }    
    else{
        roundData.innerText=`Round number: ${roundNumber+1}`
        roundNumber=roundNumber+1
    }
}

function game(evt){
    let playerSelection=evt.target.textContent;
    let computerPlay=computerSelection();
    let roundOutcome={"score":roundResult(playerSelection,computerPlay),"playerSelection":playerSelection,"computerSelection":computerPlay};
    printOutcome(roundOutcome)
    gameEnd()
}

function printOutcome(roundOutcome){
    if(roundOutcome.score[0]===1) {
        totalScore[0]+=1
        if (totalScore[0]===5) {
            printData("You won the game",".outcomeInfo");
            gameOver=true;
        }
        else {
            printData("Congratulations, you won!!",".outcomeInfo"); 
        }
    }
    else if (roundOutcome.score[1]===1) {
        totalScore[1]+=1 
        if (totalScore[1]===5) {
            printData("Game Over!",".outcomeInfo");    
            gameOver=true; 
        }
        else {
            printData("Uh oh, CPU won...",".outcomeInfo");  
        }
    }
    else{
        printData("It's a draw!!!",".outcomeInfo"); 
    }
    printData(`Total score: HUM ${totalScore[0]} VS CPU ${totalScore[1]} `,".scoreInfo"); 
}

function clearPrintOutcome(){
    printData('',".outcomeInfo");
    printData('',".scoreInfo");
    printData('',".roundInfo");
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