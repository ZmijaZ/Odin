const h1 = document.querySelector("#h1");

const divArray = [];

import { GameBoard } from "./objects.js";

let Table = GameBoard();

const board = document.querySelector("#board");
board.style.color = "green";

let numberOfTiles = 9;
let playerX = true;

for (let i = 0; i < numberOfTiles; i++) {
  const divi = document.createElement("div");
  board.appendChild(divi);
  divArray.push(divi);

  divi.addEventListener("click", function () {
    if (divi.textContent == "" && playerX && h1.textContent == "TicTacToe") {
      divi.textContent = "X";
      Table.tiles[i] = "X";
      divi.style.color = "red";

      if (Table.checkWinner("X") == 1) divi.style.filter = "blur(4px)";
      playerX = !playerX;
      console.log(i + " selected");
    } else if (divi.textContent == "" && !playerX) {
      divi.textContent = "O";
      Table.tiles[i] = "O";
      divi.style.color = "green";

      if (Table.checkWinner("O") == 1) divi.style.filter = "blur(4px)";

      playerX = !playerX;
      console.log(i + " selected");
    } else {
      console.log(divi.textContent);
    }
  });
}

export { h1, board };
