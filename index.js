let firstCard= Math.floor(Math.random() * 10 + 2 );

let secondCard= Math.floor(Math.random() * 10 + 2);

let sum = firstCard + secondCard;

let hasBlackJack = false;

let isAlive = true;

let message = "" 

function startGame(){}

if(sum <= 20){
    message = "Do you want to draw a new card? 🤩"
} else if(sum === 21){
    message = "Hurray, you've got Blackjack 🎉"
    hasBlackJack = true;
} else{
    message = "you are out of the game!😭"
    isAlive = false;
}



console.log(message);