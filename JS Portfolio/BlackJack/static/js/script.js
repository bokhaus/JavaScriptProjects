// Black Jack Program

//BlackJack Object
let blackjackGame = {
    'you': { 'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score':0},
    'dealer': { 'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score':0},
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],
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
    let cardImage = document.createElement('img');

    /* Uses back ticks and a variable in the image path to select a random card.
    Pay attention to barcket type*/
    cardImage.src = `static/images/${card}.png`;
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    hitSound.play();
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
}
