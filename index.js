let firstCard= Math.floor(Math.random() * 10 + 2 );

let secondCard= Math.floor(Math.random() * 10 + 2);

let sum = firstCard + secondCard;

if(sum <= 20){
    console.log("Do you want to draw a new card?")
} else if(s === 21){
    console.log("Hurray, you've got Blackjack 🎉");
} else{
    console.log("you are out of the game!😭");
}