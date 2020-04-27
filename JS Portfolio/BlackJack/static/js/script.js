// Black Jack Program

//BlackJack Object
let blackjackGame = {
    //Dictionary for the balckjack game
    'you': { 'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score':0, 'scoreMessage': 'Busted'},
    'dealer': { 'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score':0},
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],
    'cardMap': {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8':8, '9': 9, //Maps each card to its value
                '10': 10, 'K': 10, 'J': 10, 'Q': 10, 'A': [1,11]}, // Ace has potential value of either 1 or 11, use an array
};

const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']

const hitSound = new Audio('static/sounds/swish.m4a'); //hit sound


/*Selects HTML id= (i.e.,"blackjack-hit-button") and when the button is clicked, it will run 
the function blackjackHit */
document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);  
document.querySelector('#blackjack-stand-button').addEventListener('click', blackjackStand);  
document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);  

/* Hit function calls show card function*/
function blackjackHit() {
    let card = randomCard(); //uses randomCard() to display a random card in the div
    console.log(card);
    showCard(card,YOU);
    updateScore(card, YOU);
    console.log(YOU['score']); //test score calculations
    showScore(YOU);
}

// Selects a random card from the card index in blackjackGame().
function randomCard() {
    let randomIndex = Math.floor(Math.random() *13);
    return blackjackGame['cards'][randomIndex];   
}

/* This function works inside of the main function to show cards.
It uses parameters passed in to it to determine which div to use. This 
makes the code more dynamic*/
function showCard(card,activePlayer){ 
    if (activePlayer['score'] <= 21) {
        let cardImage = document.createElement('img');

        /* Uses back ticks and a variable in the image path to select a random card.
        Pay attention to barcket type*/
        cardImage.src = `static/images/${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
    } 
}

/* this function takes the active player and uses two parameters to determine the current score of the player
It gets the score from the dictionary and then increments it based on the value in the cardMap from the dictionary */
function updateScore(card, activePlayer) {
    //Use if else statement to determine whether Ace is a 1 or 11
    /*BUST LOGIC*/
    if (card == 'A') {
        /* If the activePlayer score is < 21  and adding 11 keeps below 21 the array index [1] (11) 
        from the cardMap in dictionary */
        if (activePlayer['score'] + blackjackGame['cardMap'][card][1] <= 21) {
            activePlayer['score'] += blackjackGame['cardMap'][card][1];
        }else{
            // else add index [0] (1) in cardMap dictionary
           activePlayer['score'] += blackjackGame['cardMap'][card][0];
        }
    }else{ //just increment the score if not an ace.
    activePlayer['score'] += blackjackGame['cardMap'][card];
    }
}

//Displays score in the "your-blackjack-result" HTML span tag.
function showScore(activePlayer) {
    if(activePlayer['score'] > 21){ //Bust logic to stop showing the score
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!!!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    }else{
    document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}

function blackjackStand() {
    alert('I am going to stand here'); //test function
}

/* Removes images from both divs in row one when Deal is clicked */
function blackjackDeal() {
    //Query selects "your-box" and then selects all images inside 'your-box
    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
    
    // Uses for loop for repetitive task of removing images from div.
    for(i=0; i< yourImages.length; i++){
        yourImages[i].remove();
    }
    for(i=0; i< dealerImages.length; i++){
        dealerImages[i].remove();
    }
    //Reset score internally
    YOU['score'] = 0;
    DEALER['score'] = 0;

    //Resets score to zero and changes color to white on the front-end HTML
    document.querySelector('#your-blackjack-result').textContent = '0';
    document.querySelector('#your-blackjack-result').style.color = '#ffffff';
    document.querySelector('#dealer-blackjack-result').textContent = '0';
    document.querySelector('#your-blackjack-result').style.color = '#ffffff';
}




