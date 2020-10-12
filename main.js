let numberOfDiceEntered = document.querySelector("#number-of-dice-entered");
let roll = document.querySelector("#roll");
let showAllRollsButton = document.querySelector("#show-all-rolls");
let totalOfDiceResults = document.querySelector("#total-of-dice-results");
let rollResults = document.querySelector("#roll-results");
let dieRolls = [];

roll.addEventListener("click", function () {
  let amountOfDice = numberOfDiceEntered.value;
  let count = 0;
  dieRolls = [];
  while (count < amountOfDice) {
    dieRolls.push(randomRoll());
    count++;
  }
  count = 0;
  let total = 0;

  while (count < dieRolls.length) {
    total += dieRolls[count];
    console.log(dieRolls[count]);
    count++;
  }
  totalOfDiceResults.innerHTML = "The total of all rolls is: " + total;
  console.log(dieRolls);
});
function randomRoll() {
  return Math.floor(Math.random() * 6) + 1;
}

showAllRollsButton.addEventListener("click", function () {
  rollResults.innerhtml = "";
  let count = 0;
  while (count < dieRolls.length) {
    const newString = '<li class="roll-results">' + dieRolls[count] + "</li>";
    rollResults.innerHTML += newString;
    count++;
  }
});
