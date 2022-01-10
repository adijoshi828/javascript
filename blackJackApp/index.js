// let firstCard = 10;
// let secondCard = 7;
// let cards = [firstCard, secondCard];
// let sum = firstCard + secondCard;
// let hasBlackJack = false;
// let isAlive = true;
// let message = "";

// let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
// let cardEl = document.getElementById("card-el");

// function renderGame() {
//   cardEl.textContent = "Cards: " + cards[0] + ", " + cards[1];
//   sumEl.textContent = "Sum: " + sum;

//   if (sum <= 20) {
//     message = "Do you want to draw a new card ?";
//   } else if (sum === 21) {
//     message = "You've got a blackjack";
//     hasBlackJack = true;
//   } else {
//     message = "You're out of the game";
//     isAlive = false;
//   }

//   messageEl.textContent = message;
// }

// function startGame() {
//   renderGame();
// }

// function newCard() {
//   let thirdCard = 4;
//   cards.push(thirdCard);
//   sum += thirdCard;
//   renderGame();
// }

let sentence = ["Hello", "my", "name", "is", "Aditya", "Joshi"];
let messageEl = document.getElementById("message-el");

for (let i = 0; i < sentence.length; i++) {
  messageEl.textContent += sentence[i];
}
