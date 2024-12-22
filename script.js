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
            break;
    }
}
function playRound(round){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(`Round: ${round}`)
    console.log(`Computer: ${computerSelection}  Player: ${humanSelection}`);
    if(humanSelection === computerSelection){
        console.log(`It's a tie you both pick ${humanSelection}`);
    }
    else if(humanSelection === 'rock' && computerSelection === 'scissors'){
        humanScore += 1;
        console.log('You Win! Rock beats Scissors');
    }
    else if(humanSelection === 'paper' && computerSelection === 'rock'){
        humanScore += 1;
        console.log('You Win! Paper beats Rock');
    }
    else if(humanSelection === 'scissors' && computerSelection === 'paper'){
        humanScore += 1;
        console.log('You Win! Scissors beats Paper');
    }
    else{
        computerScore += 1;
        console.log(`You Lose! ${computerSelection} beats ${humanSelection}`);
    }
}
function playGame(){
    for(let i = 1; i <= 5; i++){
        let round = i;
       playRound(round);
       console.log('computer score: ' + computerScore);
       console.log('player score: ' + humanScore);
    }
}
let humanScore = 0;
let computerScore = 0;
console.log(playGame());