function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*3);
    return computerChoice;
}
console.log(getComputerChoice());