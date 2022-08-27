const h1 = document.querySelector("#h1");

const divArray = [];

import { GameBoard } from "./GameBoard.js";
import { playerOne, playerTwo } from "./index.js"; //check comment index.js

let Table = GameBoard();

const board = document.querySelector("#board");
const button = document.querySelector("#button");
board.style.color = "green";

let numberOfTiles = 9;
let playerX = true;

function startGame() {
  for (let i = 0; i < numberOfTiles; i++) {
    const divi = document.createElement("div");
    board.appendChild(divi);
    divArray.push(divi);

    divi.addEventListener("click", function () {
      if (divi.textContent == "" && playerX && h1.textContent == "TicTacToe") {
        divi.textContent = "X";
        Table.tiles[i] = "X";
        divi.style.color = "red";

        if (Table.checkWinner(playerOne.getName()) == 1) {
          blurTiles();
        }
        playerX = !playerX;
        console.log(i + " selected");
      } else if (divi.textContent == "" && !playerX) {
        divi.textContent = "O";
        Table.tiles[i] = "O";
        divi.style.color = "green";

        if (Table.checkWinner(playerTwo.getName()) == 1) {
          blurTiles();
        }

        playerX = !playerX;
        console.log(i + " selected");
      } else {
        console.log(divi.textContent);
      }
    });
  }
}
function blurTiles() {
  for (let x of divArray) {
    x.style.filter = "blur(4px)";
  }

  button.style.visibility = "visible";
  button.style.height = "35px";
  button.textContent = "Play again?";
  button.style.zIndex = "2";
}

function clearTiles() {
  for (let i = 0; i < 9; i++) {
    Table.tiles[i] = i;
    divArray[i].textContent = "";
  }

  startGame();
}

startGame();

export { h1, board, clearTiles };
