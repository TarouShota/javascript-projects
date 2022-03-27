/**
 * It returns a random number between 1 and 3.
 * @param root - The root node of the tree.
 */
root = [1, 3, 5, 6, 2, 3];
let traverse = (root) => { };
console.log(traverse(root));

let computerPlay = () => {
  let result = Math.floor(Math.random() * (4 - 1) + 1);
  switch (result) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
  }
};
let upperCase = (stringToChange) => {
  stringToChange = stringToChange.toLowerCase();
  stringToChange = stringToChange[0].replace("r", "R");
  stringToChange = stringToChange[0].replace("p", "P");
  stringToChange = stringToChange[0].replace("s", "S");
  return stringToChange;
};
/**
 * Given a player's input and the computer's input, return a string that says who won or if there was a
 * tie
 * @param player - The player's input.
 * @param computer - The computer's choice.
 * @returns The result of the game.
 */
let theResult = (player, computer) => {
  switch (playerInput) {
    case "Rock":
      switch (computerInput) {
        case computerInput == playerInput:
          return `Tie!`;
        case "Paper":
          return `You Lose! ${computerInput} beats ${playerInput}`;
        case "Scissors":
          return `You Win! ${playerInput} beats ${computerInput}`;
      }
  }
};

console.log(computerPlay());
const num = prompt("Enter a number: ");
const input = prompt();

/**
 * It plays a round of rock paper scissors.
 * @param playerInput - The player's input.
 * @param computerInput - The computer's random choice.
 */
let playRound = (playerInput, computerInput) => {
  upperCase(playerInput);
  console.log(playerInput);
  switch (playerInput) {
    case "Rock":
      switch (computerInput) {
        case "Rock":
          alert(`Tie!`);
        case "Paper":
          alert(`You Lose! ${computerInput} beats ${playerInput}`);
      }
  }
};
console.log(playRound("Rock", "Paper"));
