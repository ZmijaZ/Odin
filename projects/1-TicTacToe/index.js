import { Player } from "./Player.js";
import { board, clearTiles } from "./game.js";

const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const button = document.querySelector("#button");
const form = document.querySelector("#form");

let playerOne = Player("X");
let playerTwo = Player("O");

let checkGame = false;

button.addEventListener("click", function () {
  if (checkGame == false) {
    if (player1.value != "") {
      playerOne.setName(player1.value);
    }
    if (player2.value != "") {
      playerTwo.setName(player2.value);
    }

    //cleanup
    player1.style.height = "0px";
    player2.style.height = "0px";
    player1.style.visibility = "hidden";
    player2.style.visibility = "hidden";
    board.style.visibility = "visible";

    button.style.visibility = "hidden";
    button.style.height = "0px";

    board.style.position = "relative";
    board.style.top = "-25px";

    checkGame = !checkGame;
  } else {
    checkGame = !checkGame;
    button.textContent = "Start game";
    clearTiles();
  }
});

//I export players to game.js, in order to write out their names in the function checkWinner

export { playerOne, playerTwo };
