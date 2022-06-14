function computerPlay() {
    num = Math.floor(Math.random() * 3);
    if (num === 0) {
        return "Rock";
    }
    else if (num === 1) {
        return "Paper";
    }
    else if (num === 2) {
        return "Scissors";
    }
    else {
        return Error;
    }
}



function playRound(playerSelection, computerSelection) {
    
    if (computerSelection === playerSelection) {
        return ["t","It's a tie!"];
    }
    else if (computerSelection === "rock") {
        if (playerSelection === "paper") {
            return ["p", "You Win! Paper beats Rock!"];
        }
        else {return ["c", "You Lose! Rock beats Scissors!"];}
     
    }
    else if (computerSelection === "paper") {
        if (playerSelection === "rock") {
            return ["c", "You Lose! Paper beats Rock!"];
        }
        else {return ["p", "You Win! Scissors beats Paper!"];}
     
    }
    else {
        if (playerSelection === "rock") {
            return ["p", "You Win! Rock beats Scissors!"];
        }
        else {return ["c", "You Lose! Scissors beats Paper!"];}
    }
}

function game() {
    let score = [0,0];
    // play 5 rounds
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Pick Rock, Paper, or  Scissors!").toLowerCase();
        let computerSelection = computerPlay().toLowerCase();
        let result = playRound(playerSelection, computerSelection);
        // Log winner message
        console.log(result[1]);
        //Update Score
        if (result[0] === "p") {
            score[0] += 1; 
        }
        else if (result[0] === "c") {
            score[1] += 1;
        }
        //Log Score
        console.log("Score: Player: " + score[0].toString() + " Computer: " + score[1].toString());
    }
    if (score[0] > score[1]) {
        console.log("Game over! You Win! Score " + score[0].toString() + " - " + score[1].toString());
    }
    else if (score[0] === score[1]) {
        console.log("Game over! Its a tie! Score " + score[0].toString() + " - " + score[1].toString());
    }
    else {
        console.log("Game over! You Lose! Score " + score[0].toString() + " - " + score[1].toString());
    }
}


