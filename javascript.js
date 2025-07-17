//console.log("Hello world");

//function that randomizes robot choise of rock paper scissors
function getComputerChoice(){
    //math.random chooses value (0-1] including 0, excluding 1
    //math.floor rounds down, so values 0,1,2
    let compChoice = Math.floor(Math.random()*3);

    if(compChoice == 0){
        return "Rock";
    }
    else if(compChoice == 1){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}
console.log("Round: 1");
//a pop out dropdown comes out in web for user input
//"let", gets the user input 
let userChoice = prompt("Choose: Rock, Paper, or Scissors");
let computerChoice = getComputerChoice();


//prints user choice
console.log("User Choice:");
console.log(userChoice);

//prints computer choice
console.log("Computer Choice:")
console.log(computerChoice);


//human and computer score tracker
let humanScore = 0;
let computerScore = 0;


//prints round results
function playRound(userChoice, computerChoice){
    if(userChoice == "Rock" || userChoice == "rock"){
        if(computerChoice == "Rock"){
            console.log("Tie! Both users chose Rock");
        }
        else if(computerChoice == "Paper"){
            computerScore++;
            console.log("You lose! Paper beats Rock");
        }
        else{
            humanScore++;
            console.log("You win! Rock beats Scissors");
        }
    }
    else if(userChoice == "Paper" || userChoice == "paper"){
        if(computerChoice == "Paper"){
            console.log("Tie! Both users chose Paper");
        }
        else if(computerChoice == "Scissors"){
            computerScore++;
            console.log("You lose! Scissors beats Paper");
        }
        else{
            humanScore++;
            console.log("You win! Paper beats Rock");
        }
    }
    else{
        if(computerChoice == "Scissors"){
            console.log("Tie! Both users chose Scissors");
        }
        else if(computerChoice == "Rock"){
            computerScore++;
            console.log("You lose! Rock beats Scissors");
        }
        else{
            humanScore++;
            console.log("You win! Scissors beats Paper");
        }
    }
}



//plays game
function playGame(userChoice, computerChoice){

    //first round played
    playRound(userChoice, computerChoice);
    console.log("\n");

    //play rounds 2-5
    for(let i = 2; i < 6; i++){
        console.log("Round: " + i);

        //a pop out dropdown comes out in web for user input
        //"let", gets the user input 
        userChoice = prompt("Choose: Rock, Paper, or Scissors");
        computerChoice = getComputerChoice();

        //prints user choice
        console.log("User Choice: ");
        console.log(userChoice);

        //prints computer choice
        console.log("Computer Choice: ")
        console.log(computerChoice);

        //print round result
        playRound(userChoice, computerChoice);

        console.log("\n");
    }

    //print final result of game
    if(humanScore > computerScore){
        console.log("You won! Final result \n" + 
            humanScore + " : " + computerScore);
    }
    else if(humanScore < computerScore){
        console.log("You lost! Final result \n" + 
            humanScore + " : " + computerScore);
    }
    else{
        console.log("No winner! Final result \n" + 
            humanScore + " : " + computerScore);
    }
    
}

playGame(userChoice, computerChoice);