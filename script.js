function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*3);
    if(computerChoice === 0){
        return 'rock';
    }
    else if(computerChoice === 1){
        return 'paper';
    }
    else if(computerChoice === 2){
        return 'scissors'
    }
    else{
        return 'N/A choice'
    }
}
function getHumanChoice(){
    let humanChoice = prompt('rock, paper, scissors').toLowerCase();
    switch(humanChoice){
        case 'rock':
            return 'rock'
            break;
        case 'paper':
            return 'paper';
            break;
        case 'scissors':
            return 'scissors'
            break;
        default:
            return 'N/A'
    }
}
function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        return `It's a tie you both pick ${humanChoice}`;
    }
    else if(humanChoice === 'rock' && computerChoice === 'scissors'){
        return 'You Win! Rock beats Scissors';
    }
    else if(humanChoice === 'paper' && computerChoice === 'rock'){
        return 'You Win! Paper beats Rock';
    }
    else if(humanChoice === 'scissors' && computerChoice === 'paper'){
        return 'You Win! Scissors beats Paper';
    }
    else{
        return `You Lose! ${computerChoice} beats ${humanChoice}`;
    }
}

let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(getComputerChoice());
console.log(getHumanChoice());
console.log(playRound(humanSelection, computerSelection));