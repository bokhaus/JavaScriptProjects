// Black Jack Program


/*Selects HTML id= (i.e.,"blackjack-hit-button") and when the button is clicked, it will run 
the function blackjackHit */
document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);  
document.querySelector('#blackjack-stand-button').addEventListener('click', blackjackStand);  
document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);  

function blackjackHit() {
    alert('Ouch you just hit me'); //test function
}

function blackjackStand() {
    alert('I am going to stand here'); //test function
}

function blackjackDeal() {
    alert('I will just deal with it'); //test function
}