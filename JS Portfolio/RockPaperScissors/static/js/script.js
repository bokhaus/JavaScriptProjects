// Rock, Paper, Scissors Game

function rpsGame(yourChoice) {
    console.log(yourChoice); // Can reference-access this object yourChoice.src
    
    let humanChoice, botChoice;
    humanChoice = yourChoice.id;
    console.log('Your Choice - ', humanChoice);
    
    botChoice = numberToChoice(randomToRpsInterger()); // generates a randome number and adds to bot choice.
    console.log('Computer Choice - ', botChoice);
    
    results = decideWinner(humanChoice, botChoice); //[0,1] human won | bot lost
    console.log(results);
    
    message = finalMessage(results); //{message: You Win!, 'color': green} 
    console.log(message);
    //rpsFrontEnd(yourChoice.id, botChoice, message); //returns object

}

function randomToRpsInterger() {
    return Math.floor(Math.random() * 3); // Creates a random number between 0-3 and removes deciaml (Math.floor)
}

function numberToChoice(number){  
    return ['rock', 'paper', 'scissors'][number]; //0-rock, 1-paper, 2-scissors
}

 //defines your choices and outcomes. (dictionary key:value)
function decideWinner(yourChoice, computerChoice) {
    let rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'scissors': 0, 'rock': 1, 'paper': 0.5},
        'scissors': {'scissors': 0.5, 'rock': 0, 'paper': 1}
    };

    let yourScore = rpsDatabase[yourChoice][computerChoice];
    let computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if(yourScore == 0){
        return {'message': 'You LOST!', 'color': 'red'};
    }else if (yourScore == 0.5){
        return {'message': 'You Tied!', 'color': 'yellow'};
    }else{
        return {'message': 'You WON!!!', 'color': 'green'};
    }
}

