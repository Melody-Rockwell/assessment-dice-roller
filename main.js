//you will total the results of all the dice that were
// rolled and add the sum to the "Total" area on the page using innerHTML.
let numberOfDiceEntered = document.querySelector("#number-of-dice-entered");
let roll = document.querySelector("#roll");
let showAllRolls = document.querySelector("#show-all-rolls");
let totalOfDiceResults = document.querySelector("#totalOfDiceResults");
let allRollsMade = document.querySelector("allRollsMade");

roll.addEventListener("click", function () {
  let amountOfDice = numberOfDiceEntered.value;
  let count = 0;
  let dieRolls = [];
  while (count < amountOfDice) {
    dieRolls.push(randomRoll());
    console.log(count);
    count++;
  }
  console.log(dieRolls);
});
function randomRoll() {
  return Math.floor(Math.random() * 6) + 1;
}

// showAllRolls.addEventListener("click", function () {
//   let count = 0;
//   let dieRolls = [];
//   while (count < dieRolls.length) {
//     console.log(dieRolls[count]);
//     count++;
//   }
// });

//

//

// }

// Define an empty array, named "dieRolls".
// Add a click event handler to the "Roll!' button.
// In the event handler, get the requested number of dice from the user and assign it to a new variable to use later.
// Using a loop, simulate die rolls a number of times according to the number requested by the user.
// hint: user will input a # of dice and click roll

// In the loop, push each die roll result to the end of the dieRolls array.

// Sum the results from the dieRolls array, and display the total in the Total element using innerHTML.
// Add an event listener to the "Show All Rolls" button, which loops over the dieRolls array, to get each individual die roll and display it as a List Item within the "All Rolls" element.
