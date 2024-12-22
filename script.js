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
    let humanChoice = prompt('rock, paper, scissors');
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
